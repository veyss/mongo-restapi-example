const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require('dotenv');
dotenv.config();

const DB_URL = ""
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("DB CONNECTED"))
  .catch((error) => {
    console.log("error", error)
  });

// Middeleware
app.use(express.json())

// Routes
const postRoutes = require("./routes/posts");
app.use("/api/posts", postRoutes)

// 404 Catcher

app.use((req, res, nex) => {
  const error = new Error("URL Not Found");
  error.status = 404;
  nex(error);
})
app.use((req, res, nex) => {
  res.status(error.status || 500);
  res.send({ message: `Error! ${error.message}`, error: error })

})


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`))