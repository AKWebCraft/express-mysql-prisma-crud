const express = require("express");
const dotenv = require("dotenv").config();
const routes = require("./routes/Post.routes");

const app = express();
app.use(express.json());

app.use(routes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
