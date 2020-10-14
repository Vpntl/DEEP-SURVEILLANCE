const express = require("express");
const port = 8000;
const app = express();

app.listen(port, function (err) {
  if (err) {
    console.log("error in starting the sever ");
    return;
  }
  console.log("server is up on port ", port);
});
