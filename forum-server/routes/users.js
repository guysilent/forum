const express = require('express');
const router = express.Router();
const sql = require('mssql');

const { poolPromise } = require('../db/db');

router.post('/', async (req, res) => {
    try {
        const pool = await poolPromise
        const transaction = new sql.Transaction(pool);
        //Using transaction to prevent 2 users adding the same username at the same time
        transaction.begin(err => {
            const isExistRequest = new sql.Request(transaction);
            //First we check if we allready have a username with this name in the DB
            isExistRequest.input('userName', sql.VarChar, req.body.userName)
                .query('select * from Users where Name=@userName', (err, result) => {
                    if (err) {
                        transaction.rollback();
                        throw err;
                    }
                    if (result.recordset.length === 0) {
                        //If not, we add the username to the DB
                        const addUserRequest = new sql.Request(transaction);
                        addUserRequest.input('userName', sql.VarChar, req.body.userName)
                            .query('insert into Users (Name) output Inserted.ID values (@userName)', (err, result) => {
                                if (err) {
                                    transaction.rollback();
                                    throw err;
                                }
                                if (result.recordset.length > 0) {
                                    //no username found, we added the new username, respond.
                                    res.json(result.recordset[0]);
                                    transaction.commit();
                                }
                            });
                    } else {
                        //We found a username with the same name, respond and commit the transaction
                        res.json(result.recordset[0]);
                        transaction.commit();
                    }
                    
                } );
        })
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
})

module.exports = router;