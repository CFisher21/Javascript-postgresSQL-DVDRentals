const dal = require('./db')

var getNullrentals1 = function() {
    return new Promise(function(resolve, reject) {
        const sql = "SELECT * FROM notreturned_store1";
        dal.query(sql, [], (error, result) =>{
            if(error) {
                reject(error)
            } else {
                resolve(result.rows);
            }
        });
    });
};

var getNullrentals2 = function() {
    return new Promise(function(resolve, reject) {
        const sql = "SELECT * FROM notreturned_store2";
        dal.query(sql, [], (error, result) =>{
            if(error) {
                reject(error)
            } else {
                resolve(result.rows);
            }
        });
    });
};

module.exports = {
    getNullrentals1,
    getNullrentals2
}