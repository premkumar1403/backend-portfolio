const mongoose = require("mongoose")
const user = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    message: {
        type: String,
    }
})
module.exports=mongoose.model("credential",user)