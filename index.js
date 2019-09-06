const restify = require("restify");
const PORT = 5000;
const routes = require("./src/routes");

console.log("Launching app");

function initServer() {
	const server = restify.createServer({ name: "superapp" });
	routes(server);
	return server;
}

const server = initServer();
server.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});
