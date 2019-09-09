const client = require("./redisClient");
const redis = require("redis");

function redisData() {
	return new Promise((res, err) => {
		client.set("string key", "string val", redis.print);
		client.hset("hash key", "hashtest 1", "some value", redis.print);
		client.hkeys("hash key", function(err, replies) {
			res(replies);
		});
		console.log("saving data..");
		client.save();
	});
}

module.exports = redisData;
