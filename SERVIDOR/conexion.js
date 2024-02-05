var mysql = require('mysql');
var pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '12345',
    database : 'lab2_u2'
});

var getConnection = function(cb){
    pool.getConnection(function(err, connection){
        if(err){
            return cb(err);
        }
        cb (null, connection);
    });
};

module.exports = getConnection;
