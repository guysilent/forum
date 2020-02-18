const sql = require('mssql')
const config = require('./dbConfig');
const {wss, WebSocket} = require('../ws/ws');

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

async function broadcastForumUpdate() {
    const data = await getThreadsAndComments();
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data));
        }
    })
}

async function getThreadsAndComments() {
    return new Promise(async (resolve, reject) => {
        try {
            const pool = await poolPromise;
            const getThreads = new sql.Request(pool);
            getThreads.query('select * from Threads', (err, result) => {
                    if (err) {
                        throw err;
                    }
                    if (result.recordset) {
                        //using a map here so i can easily nest the comments into the threads
                        var threadsMap = new Map();
                        result.recordset.forEach((thread) => {
                            threadsMap[thread.ID] = thread;
                            threadsMap[thread.ID].comments = [];
                        }); 
                        const getComments = new sql.Request(pool);
                        getComments.query('select * from Comments', (err, result) => {
                            if (err) {
                                throw err;
                            }
                            if (result.recordset) {
                                result.recordset.forEach((comment) => {
                                    threadsMap[comment.ThreadID].comments.push(comment);
                                }); 
                                const retVal = [];
                                for (const key in threadsMap) {
                                    retVal.push(threadsMap[key]);
                                }
                                resolve(retVal);
                            } else {
                                reject();
                            }
    
                        });
                    } else {
                        reject();
                    }
            });
    
        } catch (err) {
            console.log(err);
            reject();
        }
    })
    
}

module.exports = {
  sql, poolPromise, getThreadsAndComments, broadcastForumUpdate
}