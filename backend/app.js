const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;

var corsOptions = {
  origin: ["http://example.com", "http://localhost:3000"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use("/image", express.static("./images"));

app.use(express.json());

app.use(require("./src/routes/routes"));

app.listen(port, () => console.log(`Listening on port ${port}!`));
