const redisData = require("./redisData");

function setRoutes(server) {
	server.get("/", (req, res, next) => {
		res.send("home");
		next();
	});

	server.get("/redis", async (req, res, next) => {
		try {
			const data = await redisData();
			res.send(data);
			next();
		} catch (error) {
			res.send(error);
			next();
		}
	});

	return server;
}

module.exports = setRoutes;
