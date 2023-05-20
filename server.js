const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
const port = process.env.PORT || 3000

var items = [];
var workItems = [];
const app = express();

app.set('view engine', 'ejs'); //sets ejs as the view engine and assumes a views folder exist.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public")); //be default express can only serve server.js and views folder 
//all other files have to be declared as static in a specific folder. The folders in public can be access directly as folder/filename

app.listen(port, function () {
    console.log("Server running on port " + port);
});



app.get('/', function (req, res) {



    var day = date.getDay();



    res.render('todo', { listTitle: day, items: items }); //sends todo.ejs template after populating it with foo.

});

app.post("/", function (req, res) {
    var newItem = req.body.newItem;
    var listType = req.body.listType;

    if (listType == "Work List") {
        workItems.push(newItem);
        res.redirect("/workList");
    } else {
        items.push(newItem);
        res.redirect("/");

    }


});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get("/workList", function (req, res) {
    res.render('todo', { listTitle: "Work List", items: workItems });
});