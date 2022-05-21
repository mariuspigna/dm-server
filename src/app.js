require('dotenv').config();

const express      = require('express');
const app          = express();
const session      = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

app.disable("x-powered-by");
const store = new MongoDBStore({
    uri: process.env.DB_CONNECTION,
    collection: "session",
  });
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(
    session({
      secret: "secret",
      resave: false,
      saveUninitialized: false,
      store: store,
    })
  );
  
app.use(express.json());
module.exports = app;