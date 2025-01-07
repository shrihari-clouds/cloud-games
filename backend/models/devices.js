module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            name: { type: String, required: true },
            highlight: { type: String, required: true },
            description: { type: String, required: false },
            image: {
                mime: { type: String, required: false },
                data: { type: String, required: false }
            }, // Base64 encoded image should be stored as a String
            refLink: {
                text: { type: String, required: false },
                url: { type: String, required: false }
            }
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Device = mongoose.model("device", schema);
    return Device;
};