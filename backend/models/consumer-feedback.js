module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
			name: String,
            comment: String,
			commentFrom: String,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const ConFeedback = mongoose.model("consumer-feedback", schema);
    return ConFeedback;
};