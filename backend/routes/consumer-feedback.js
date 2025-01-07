module.exports = app => {
    const consumerFeedback = require("../controllers/consumer-feedback.js");

    const router = require("express").Router();

    router.post("/", consumerFeedback.create);

    router.get("/", consumerFeedback.findAll);

    router.get("/:id", consumerFeedback.findOne);

    router.put("/:id", consumerFeedback.update);

    router.delete("/:id", consumerFeedback.delete);

    app.use("/api/feedback", router);
};