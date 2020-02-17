const express = require('express');
const router = express.Router();
const sql = require('mssql');

const { poolPromise } = require('../db/db');

router.post('/', async (req, res) => {
    try {
        const pool = await poolPromise;
        const addCommentRequest = new sql.Request(pool);
        addCommentRequest
            .input('userID', sql.Int, req.body.userID)
            .input('threadID', sql.Int, req.body.threadID)
            .input('text', sql.VarChar, req.body.text)
            .input('timestamp', sql.DateTime, new Date())
            .query('insert into Comments (Text, UserID, Timestamp, ThreadID) values (@text, @userID, @timestamp, @threadID)', (err, result) => {
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