const mongoose = require("mongoose")
const mongodbUrl = "mongodb+srv://kulunu:#####@cluster0.osor5ba.mongodb.net/mydatabase?retryWrites=true&w=majority"
mongoose.connect(mongodbUrl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const connection = mongoose.connection

connection.once("open", () => {
    console.log("MongoDB connected!")
})
