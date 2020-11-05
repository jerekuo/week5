const express = require("express");

const app = express();

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://jerekuo:MongooseSalasana@cluster0.nk8k3.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

var database = client.connection;
database.on(
  "error",
  console.error.bind(console, "MongoDB did not connect!!!:")
);

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080);
