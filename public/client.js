var socket = io("http://localhost:3000");

$(document).ready(function () {
  $("#mrA").click(function () {
    socket.emit("client-send-data", "hello");
  });

  $("#input-value").submit(function () {
    var values = $("#input-value").val();
    socket.emit("client-send-values", values);
    $("#input-value").val("");
    return false;
  });

  $("#redBackground").click(function () {
    socket.emit("client-color-choose", "red");
  });

  $("#blueBackground").click(function () {
    socket.emit("client-color-choose", "blue");
  });

  $("#yellowBackground").click(function () {
    socket.emit("client-color-choose", "yellow");
  });
});

socket.on("server-send-color", function (data) {
  $("#backgroundColor").css("background-color", data);
});
