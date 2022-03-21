// Comment Model

// body ( string, required)
// timestamps (string, required)

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        body: {type: String, required: true,},
        userId: {type: mongoose.Schema.Types.ObjectId, ref: "user", require: true}
    },
    {
        timestamps:true,
        versionKey: false,
    }
);

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;