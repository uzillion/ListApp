var exp = require("express");
var app = exp();
var bP = require("body-parser");
var friends = [], todo =  [];

app.use(bP.urlencoded({extended: true})); 
app.use(exp.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("home");
});

app.post("/addFriend", function(req, res) {
	var temp = req.body.fName;
	friends.push(temp);
	res.redirect("friends");
});

app.get("/friends", function(req, res) {
	res.render("friends", {pFriends: friends});
});

app.post("/addTodo", function(req, res) {
	var temp = req.body.tName;
	friends.push(temp);
	res.redirect("/todo");
});

app.get("/todo", function(req, res) {
	res.render("todo");
});

app.listen(2000, function() {
	console.log("Server Started...");
});