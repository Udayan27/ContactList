const { Console } = require("console");
const express = require("express");
const path = require("path");
// const { title } = require('process');
const port = 8000;
const db = require("./config/mongoose");
const Contact = require("./models/contact");
var app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.use(express.static("assets"));

var contactList = [
  {
    name: "Thor Odinson",
    phone: "9990132206",
  },
  {
    name: "Steve Rogers",
    phone: "9876543210",
  },
  {
    name: "Tony Stark",
    phone: "8287685713",
  },
];

app.get("/", function (req, res) {
  return res.render("home", {
    title: "Contact List",
    contact_list: contactList,
  });
});

app.post("/add-to-list", function (req, res) {
  contactList.push(req.body);

  return res.redirect("/");
});
app.get("/delete-contact", function (req, res) {
  console.log(req.query);
  let phone = req.query.phone;
  let contactIndex = contactList.findIndex((contact) => contact.phone == phone);
  if (contactIndex != -1) {
    contactList.splice(contactIndex, 1);
  }
  return res.redirect("back");
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Server is running at: ", port);
});
