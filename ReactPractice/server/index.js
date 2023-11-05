const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json({limit:"10mb",extended:true}));

const CONNECTION_URL =
  "mongodb://localhost:27017/MyDatabase?directConnection=true";

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true });


const PORT = process.env.PORT || 5000;

const imageUpload = require("./models/imageupload");

app.post("/fileupload" , async (req,res) => {

    const { name , file } = req.body;
    console.log(name);
    console.log(file)
    const myupload = new imageUpload({
        Name:name,
        imageFile: file
    })

    await myupload.save();

})

app.get("/readfile", async (req , res ) => {
    const result = await imageUpload.find();
    res.send(result);
} )


app.listen(PORT, () => {
    console.log("Server is running...")
})
