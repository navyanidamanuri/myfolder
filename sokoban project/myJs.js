var xAxis = 0;
var yAxis = 0;

$(document).ready(function () {
    document.getElementById("blockId").style.left = xAxis + "px";
    document.getElementById("blockId").style.top = yAxis + "px";
});

$(document).keyup(function (e) {
    if (e.keyCode === 37) {
        xAxis = xAxis - 50;
        document.getElementById("blockId").style.left = xAxis + "px";
    }
    else if (e.keyCode === 38) {
        yAxis = yAxis - 50;
        document.getElementById("blockId").style.top = yAxis  + "px";
    }
    else if (e.keyCode === 39) {
        xAxis = xAxis + 50;
        document.getElementById("blockId").style.left = xAxis + "px";
    }
    else if (e.keyCode === 40) {
        yAxis = yAxis + 50;
        document.getElementById("blockId").style.top = yAxis + "px";
    }
});