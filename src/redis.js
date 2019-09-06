const redis = require("redis");
const client = redis.createClient("redis");

function connectRedis() {
	return new Promise((res, err) => {
		client.on("error", function(error) {
			err(error);
		});

		client.set("string key", "string val", redis.print);
		client.hset("hash key", "hashtest 1", "some value", redis.print);
		client.hkeys("hash key", function(err, replies) {
			res(replies);

			client.quit();
		});
	});
}

module.exports = connectRedis;
