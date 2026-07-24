const express = require("express");

const app = express();

const PORT = 3000;


/* =========================
   MIDDLEWARE
========================= */

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


/* =========================
   HOME ROUTE
========================= */

app.get("/", (req, res) => {

 res.sendFile(__dirname+"/main.html");

});

app.get("/visit", (req, res) => {

 res.sendFile(__dirname+"/Date.html");

});
app.get("/puppy.jpg", (req, res) => {

 res.sendFile(__dirname+"/puppy.jpg");

});

app.get("/yes", (req, res) => {

 res.sendFile(__dirname+"/second.html");

});

app.get("/party.jpg", (req, res) => {

 res.sendFile(__dirname+"/party.jpg");

});

app.get("/okay", (req, res) => {

 res.sendFile(__dirname+"/last.html");

});


/* =========================
   START SERVER
========================= */

app.listen(PORT, () => {

  console.log(
    `Server is running on http://localhost:${PORT}`
  );

});