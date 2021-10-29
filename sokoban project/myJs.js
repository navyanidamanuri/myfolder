function makrBox(){
    let myBox=document.createElement("div");
    myBox.className="box";
    document.getElementById("boxcontainer").appendChild(myBox);
}
var WALL="W";
var FLOOR=" ";
var TARGET="P";
var GOAL = "G";
var CREATE = "B";
var gBoard= tileMap01.mapGrid;
function printBoard(){
    var tblBoard=document.getElementById('tblBoard');
    var strHTML='';
    for(var i=0; i<tileMap01.height;i++){
        strHTML+="<tr>"
        for(var j=0;j<tileMap01.width;j++){
            var cellClass;
           
            switch (gBoard[i][j][0]) {
                case FLOOR:
                    cellClass="floor";
                    break;   
                case WALL:
                    cellClass="wall";
                    break;
                case TARGET:
                    cellClass="target";
                    xAxis=j;
                    yAxis=i;
                    break;
                case CREATE:
                    cellClass="create";
                    break;
                case GOAL:
                    cellClass="goal";
                    break;
            }

            strHTML+="<td id='y" + i + "x" + j +"' class='cell " + cellClass +"'></td>";
         }
        strHTML+="</tr>";
    }
    tblBoard.innerHTML=strHTML;
}
var xAxis = 0;
var yAxis = 0;
/*
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
})*/