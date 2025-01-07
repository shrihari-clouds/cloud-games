const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGO_URL;
db.devices = require("./devices.js")(mongoose);
db.consumerFeedback = require("./consumer-feedback.js")(mongoose);

module.exports = db;