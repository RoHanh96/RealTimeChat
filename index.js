const express = require("express");

var app = express();

app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function(req, res){
    res.render("client");
});

var server = require("http").Server(app);

const io = require("socket.io")(server);
io.on("connection", function(socket) {
    socket.on("client-color-choose", function(data) {
        io.sockets.emit("server-send-color", data);
    })

    socket.on("disconnect", function() {
        console.log(socket.id + " is disconnected.");
    })
});

server.listen(3000);
