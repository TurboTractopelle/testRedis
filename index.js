require("dotenv").config();
const restify = require("restify");
const PORT = 5000;
const routes = require("./src/routes");
const client = require("./src/redisClient");

console.log("Launching app");

client.on("error", function(error) {
	console.log(error);
});

client.on("connect", () => {
	console.log("connected");

	const server = initServer();
	server.listen(PORT, () => {
		console.log(`Listening on port: ${PORT}`);
	});
});

function initServer() {
	const server = restify.createServer({ name: "superapp" });
	routes(server);
	return server;
}
