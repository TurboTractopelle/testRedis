const mysql = require("mysql");
const connection = mysql.createConnection({
	host: process.env.REDIS_HOST,
	user: "me",
	password: "secret",
	database: "my_db"
});

function mysqlConnection() {
	return new Promise((res, err) => {
		connection.connect(error => {
			console.log(error);
			err(error);

			console.log(connection.threadId);
			res(connection.threadId);
		});
	});
}

module.exports = mysqlConnection;
