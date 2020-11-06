const express = require("express");

const app = express();

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://admin:admin@cluster0.nk8k3.mongodb.net/tictactoe?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

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
