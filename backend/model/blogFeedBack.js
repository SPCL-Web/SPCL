import mongoose from "mongoose";


const blogFeedBackSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,

    },
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,

    },
},
    {
        timestamps: true,
    })



export default mongoose.model("BlogFeedBackSchema", blogFeedBackSchema)








