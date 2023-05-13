const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.listen(3000, function () {
    console.log("Server running on port 3000");
});



app.get('/', function (req, res) {

    var today = new Date();

    if (today.getDay() === 6 || today.getDay() === 0) {
        res.send("Happy Weekend!");
    } else {
        res.send("9-5 grind!");

    }

});