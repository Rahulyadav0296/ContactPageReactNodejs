const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose.connect("mongodb://localhost:27017/newCollection");

// defines the scheme and models
const contactScheme = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Contact = mongoose.model("Contact", contactScheme);

const app = express();
app.use(cors());
app.use(express.json());
app.post("/api/contact", async (req, res) => {
  console.log("Request body: ", req.body);
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ error: "Email and password is required" });
    }

    const contact = new Contact({ email, password });
    await contact.save();

    res.status(200).send({ message: "Contact saved successfully" });
  } catch (err) {
    console.log("Error Occured");
    res.status(500).send({ error: "Error Saving Contact" });
  }
});

app.listen(3000, () => {
  console.log("Server is running..");
});
