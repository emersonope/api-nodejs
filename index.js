const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(require("./src/routes/routes"));

app.listen(4000, () => {
    console.log("Server's running!");
});