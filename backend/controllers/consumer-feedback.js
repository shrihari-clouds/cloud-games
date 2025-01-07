const db = require("../models");
const ConsumerFeedback = db.consumerFeedback;

exports.create = async (req, res) => {
    try {
        if (!req.body.name || !req.body.comment) {
            res.status(400).send({ message: "Consumer name or comment can not be empty!" });
            return;
        }

        // Create a New consumer feedback
        const payload = new ConsumerFeedback({
            name: req.body.name,
            comment: req.body.comment,
            commentFrom: req.body.commentFrom,
        });

        const data = await payload.save();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.findAll = async (req, res) => {
    try {
        const name = req.query.name;
        var condition = name ? { name: { $regex: new RegExp(title), $options: "i" } } : {};
        const data = await ConsumerFeedback.find(condition);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await ConsumerFeedback.findById(id);

        if (!data) {
            res.status(404).json({ message: "Not found consumer feedback with id " + id });
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
        const data = await ConsumerFeedback.findByIdAndUpdate(id, req.body, { useFindAndModify: false });

        if (!data) {
            res.status(404).json({ message: `Cannot update consumer feedback with id=${id}. Maybe consumer feedback was not found!` });
        }

        res.status(200).json({ message: "ConsumerFeedback was updated successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.delete = async(req, res) => {
    try {
        const id = req.params.id;
        const data = await ConsumerFeedback.findByIdAndDelete(id);

        if(!data) {
            res.status(404).json({ message: `Cannot delete consumer feedback with id=${id}. Maybe consumer feedback was not found!` });
        }
        res.status(200).json({ message: "ConsumerFeedback was deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}