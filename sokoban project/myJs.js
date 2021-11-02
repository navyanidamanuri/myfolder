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
var playerPosY = 0;
var playerPosX = 0;

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
                    playerPosX=j;
                    playerPosY=i;
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

function exampleMoveOneStepOnly(offset_Y,offset_X) {//take one step up
    let playerBlock = document.getElementById("y" + playerPosY + "x" + playerPosX);
    let moveToBlock = document.getElementById("y" + (playerPosY + offset_Y) + "x" + (playerPosX+offset_X));

    if(moveToBlock.classList.contains("wall") === false)
    {
        playerBlock.classList.remove("target");
        moveToBlock.classList.add("target");
    
        playerPosY = playerPosY + offset_Y;
        playerPosX = playerPosX + offset_X;
    }
}

/*function handleClick(x,y){
    var xDiff=x-gGamerPos.x;
    var yDiff=y-gGamerPos.y;
    var xAbsDiff=Math.abs(x-gGamerPos.x)
    var yAbsDiff=Math.abs(y-gGamerPos.y)
    if((xAbsDiff==1&&jAbsDiff==0)||(yAbsDiff==1&&xAbsDiff==0)){
        if(gBoard[x][y].type!=WALL){
            var CanMove=true;
            if(gBoard[x][y].gameElement == CREATE){
                if(gBoard[x+xDiff][y+yDiff.type!=WALL&&gBoard[x+xDiff][y+yDiff].gameElement == null]){
                    gBoard[x][y].gameElement=null;
                    gBoard[x+xDiff][y+yDiff].gameElement=CREATE;
                }else{
                    console.log("WALL Behind Box");
                    CanMove=false;
                }
            }
            if(CanMove){
                gBoard[gGamerPos.x][gGamerPos.y].gameElement=null;
                gGamerPos.x=x;
                gGamerPos.y=y;
                gBoard[gGamerPos.x][gGamerPos.y].gameElement=TARGET;
            }
        }
    }
    printBoard();
}*/

document.addEventListener("keydown", function (e) {

    if (e.keyCode === 37) {
        //left
        exampleMoveOneStepOnly(0 , -1);
        e.preventDefault();//stop browser from scrolling with arrow key
    }
    else if (e.keyCode === 38) {
        //up
        exampleMoveOneStepOnly(-1 , 0);
        e.preventDefault();//stop browser from scrolling with arrow key
    }
    else if (e.keyCode === 39) {
        //right
        exampleMoveOneStepOnly(0 , +1);
        e.preventDefault();//stop browser from scrolling with arrow key
    }
    else if (e.keyCode === 40) {
        //down
        exampleMoveOneStepOnly(+1 , 0);
        e.preventDefault();//stop browser from scrolling with arrow key
    }
    //console.log("after press logic:", e);
});