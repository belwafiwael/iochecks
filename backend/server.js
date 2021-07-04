const PORT = 3000;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const routes = express.Router();
app.use("/api", routes);

// body-parser
routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());
const jsonParser = bodyParser.json();

//cors
routes.use(cors());
// mongoDB client

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://sveltewael:svelte123@cluster0.pfkn1.mongodb.net/chainpactw?retryWrites=true&w=majority";
const client = new MongoClient(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

// connect to server
app.listen(PORT, () => {
  console.log(`Server up and running on http://localhost:${PORT}`);
});

// connect to DB
const DATABASE = "chainpactw";
client.connect((err) => {
  if (err) {
    throw Error(err);
  }
  !err && console.log(`Successfully connected to database`);
  let  users = client.db(DATABASE).collection("users");

  // perform actions on the collection object
  routes.post("/register", jsonParser, (req, res) => {
    users
      .insertOne(req.body)
      .then(() => res.status(200).send("successfully inserted new document"))
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  });
});


//routes
routes.get("/", (req, res) => {
  res.send("Hello World!");
});