const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

//mongo auth(env issue)
MONGODB_URI='mongodb+srv://monti07:monti07@customapp.m3qhjus.mongodb.net/test'
mongoose.set("strictQuery", false);
mongoose.connect(MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;

// check if connected
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
//render dont need
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('home');
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  next();
});

const jsonParser = bodyParser.json()
 
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json());

//import route
app.use('/',routes);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
app.use(express.json());