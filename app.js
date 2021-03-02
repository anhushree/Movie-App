var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
})

app.get("/results", function(req, res) {
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?apikey=d9dc0199&s=" + query;
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            //res.send(data["Search"][0]["Title"]);
            res.render("results", { data: data });

        }
    });


});

app.listen(3000, function() {
    console.log("Movie app has  Started!!!");
});