import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({
    heading1: {
        type: String,
        // required: true,

    },

    heading2: {
        type: String,


    },
    category: {
        type: mongoose.ObjectId,
        ref: "category",      //category model me jo name export kiya gaya hai
        required: true,
    },
    imagepath: {
        type: String,
        required: true,


    },
    h3: {
        type: String,


    },
    p3: {
        type: String,


    },
    h4: {
        type: String,
    },
    p4: {
        type: String,
    },
    h5: {
        type: String,
    },
    p5: {
        type: String,
    },
    h6: {
        type: String,
    },
    p6: {
        type: String,
    },
    h7: {
        type: String,
    },
    p7: {
        type: String,
    },
    h8: {
        type: String,
    },
    p8: {
        type: String,
    },
    h9: {
        type: String,
    },
    p9: {
        type: String,
    },

    // likes: {
    //     // array of user ids
    //     type: [mongoose.Schema.Types.ObjectId],
    //     ref: "users",
    //     default: [],

    // },
    // h10:{
    //     type: String,
    // },
    // p10:{
    //     type: String,
    // },
    // h11:{
    //     type: String,
    // },
    // p11:{
    //     type: String,
    // },

},
    {
        timestamps: true
    }
)


export default mongoose.model('Blog', blogSchema)







