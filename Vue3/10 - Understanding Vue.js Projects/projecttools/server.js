const express = require("express");
const history = require("connect-history-api-fallback");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(history());
app.use("/", express.static("./dist"));

app.listen(8085, function () {
    console.log("HTTP Server running on port 8085");
});
