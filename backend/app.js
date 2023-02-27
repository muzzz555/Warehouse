const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv')

dotenv.config()

const app = express();

var corsOptions = {
  origin: ["http://example.com", "http://localhost:3000"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use("/image", express.static("./images"));

app.use(express.json());

app.use(require("./src/routes/routes"));

const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'development'

console.log(port);
console.log(env);


app.listen(port, () => console.log(`Listening on port ${port}!`));
