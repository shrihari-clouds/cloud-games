const db = require("../models");
const Device = db.devices;


exports.create = async (req, res) => {
    try {
        if (!req.body.name) {
            res.status(400).send({ message: "Device name can not be empty!" });
            return;
        }

        // Create a New device
        const device = new Device({
            name: req.body.name,
            highlight: req.body.highlight,
            description: req.body.description,
            image: req.body.image,
            refLink: req.body.refLink
        });

        const data = await device.save();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.findAll = async (req, res) => {
    try {
        const name = req.query.deviceName;
        var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
        const data = await Device.find(condition);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Device.findById(id);

        if (!data) {
            res.status(404).json({ message: "Not found device with id " + id });
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).json({ message: "Data to update can not be empty!" });
        }

        const id = req.params.id;
        const data = await Device.findByIdAndUpdate(id, req.body, { useFindAndModify: false });

        if (!data) {
            res.status(404).json({ message: `Cannot update device with id=${id}. Maybe device was not found!` });
        }

        res.status(200).json({ message: "Device was updated successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.delete = async (req, res) => {
    try {        
        const id = req.params.id;
        const data = await Device.findByIdAndDelete(id);

        if(!data) {
            res.status(404).json({ message: `Cannot delete device with id=${id}. Maybe device was not found!` });
        }
        res.status(200).json({ message: "Device was deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}