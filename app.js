const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(express.json());

const MongoURL = "mongodb+srv://thekushmevada:sigmasquare@cluster0.xb1ocap.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MongoURL, {
    // useNewUrlParser: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((e) => {
    console.log("Error in connection with MongoDB : ", e);
})


app.listen(3000, () => {
  console.log("Server Started");
});

app.post("/post", async (req, res) => {
  // console.log(req.body);
  const { data } = req.body;

  try {
    if (data == "hello") {
      res.send({ status: "ok" });
    }
    else{
        res.send({ status: "error else" });
    }
  } catch (error) {
    res.send({ status: error });
  }
});
