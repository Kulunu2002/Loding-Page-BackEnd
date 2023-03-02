const mongoose = require("mongoose")
const schema = mongoose.Schema;

const userSchema = new schema({
   email: {
      type: String,
      required: true, 
      trim: true
   },
   password: {
      type: String,
      required: true,
      trim: true,
   },

})


const User = mongoose.model("User", userSchema)

module.exports = User