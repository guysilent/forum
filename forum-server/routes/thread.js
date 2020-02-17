const express = require('express');
const router = express.Router();
const sql = require('mssql');

const { poolPromise } = require('../db/db');

router.post('/', async (req, res) => {
    try {
        const pool = await poolPromise;
        const addThreadRequest = new sql.Request(pool);
        addThreadRequest
            .input('userID', sql.Int, req.body.userID)
            .input('text', sql.VarChar, req.body.text)
            .input('timestamp', sql.DateTime, new Date())
            .query('insert into Threads (Text, UserID, Timestamp) values (@text, @userID, @timestamp)', (err, result) => {
                if (err) {
                    throw err;
                }
                if (result.rowsAffected.length > 0) {
                    res.status(200);
                    res.send({'message': "SUCCESS"});
                } else {
                    res.status(500);
                    res.send({'message': "FAILED"});
                }
        });

    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
})

module.exports = router;