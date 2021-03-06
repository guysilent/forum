const express = require('express');
const router = express.Router();
const sql = require('mssql');

const { poolPromise, broadcastForumUpdate } = require('../db/db');

router.post('/', async (req, res) => {
    try {
        const pool = await poolPromise;
        const addThreadRequest = new sql.Request(pool);
        addThreadRequest
            .input('userID', sql.Int, req.body.message.userID)
            .input('text', sql.VarChar, req.body.message.text)
            .input('timestamp', sql.DateTime, new Date())
            .input('username', sql.VarChar, req.body.message.userName)
            .query('insert into Threads (Text, UserID, Timestamp, Username) values (@text, @userID, @timestamp, @username)', (err, result) => {
                if (err) {
                    throw err;
                }
                if (result.rowsAffected.length > 0) {
                    //Data updated, we need to alert all clients
                    broadcastForumUpdate();
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