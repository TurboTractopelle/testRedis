const restify = require("restify");
const PORT = 5000;

console.log("Launching app");

function initServer() {
	const server = restify.createServer({ name: "superapp" });

	server.get("/", (req, res, next) => {
		res.send("home");
		next();
	});

	return server;
}

const server = initServer();
server.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});
