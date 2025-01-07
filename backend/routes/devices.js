module.exports = app => {
    const device = require("../controllers/devices.js");

    const router = require("express").Router();

    router.post("/", device.create);

    router.get("/", device.findAll);

    router.get("/:id", device.findOne);

    router.put("/:id", device.update);

    router.delete("/:id", device.delete);

    app.use("/api/devices", router);
};