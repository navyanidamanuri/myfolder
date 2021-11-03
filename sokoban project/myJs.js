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
function exampleMoveOneStepOnly(offset_Y,offset_X) {
    let playerBlock = document.getElementById("y" + playerPosY + "x" + playerPosX);
    let moveToBlock = document.getElementById("y" + (playerPosY + offset_Y) + "x" + (playerPosX+offset_X));

    if(moveToBlock.classList.contains("wall") === false && moveToBlock.classList.contains("create") === false)
    {
        playerBlock.classList.remove("target");
        moveToBlock.classList.add("target");
    
        playerPosY = playerPosY + offset_Y;
        playerPosX = playerPosX + offset_X;
    } if ( moveToBlock.classList.contains("create") !== false ) {
        if (offset_Y === 0 && offset_X === -1) {
            exampleMoveOneStepOnlyCreate(0 , -2, 0 , -1);
            
        }
        else if (offset_Y === -1 && offset_X === 0) {
            exampleMoveOneStepOnlyCreate(-2 , 0, -1 , 0);
        
        }
        else if (offset_Y === 0 && offset_X === +1) {
            exampleMoveOneStepOnlyCreate(0 , +2, 0 , +1);
            
        }
        else if (offset_Y === +1 && offset_X === 0) {
            exampleMoveOneStepOnlyCreate(+2 , 0, +1 , 0);
            
        }
    }
}

function exampleMoveOneStepOnlyCreate(offset_Y,offset_X, offset_Y_Original,offset_X_Original) {
    let playerBlock = document.getElementById("y" + (playerPosY + offset_Y_Original) + "x" + (playerPosX+offset_X_Original));
    let moveToBlock = document.getElementById("y" + (playerPosY + offset_Y) + "x" + (playerPosX+offset_X));

    let playerBlockCursor = document.getElementById("y" + playerPosY + "x" + playerPosX);
    let moveToBlockCursor = document.getElementById("y" + (playerPosY + offset_Y_Original) + "x" + (playerPosX+offset_X_Original));

    if(moveToBlock.classList.contains("wall") === false && moveToBlock.classList.contains("create") === false)
    {
        playerBlock.classList.remove("create");
        moveToBlock.classList.add("create");

        playerBlockCursor.classList.remove("target");
        moveToBlockCursor.classList.add("target");
    
        playerPosY = playerPosY + offset_Y_Original;
        playerPosX = playerPosX + offset_X_Original;

        var goalCells = document.querySelectorAll("td.goal");
        var checkGoalsCount = 0;
        for (var i = goalCells.length - 1; i >= 0; i--) {
            if(goalCells[i].classList.contains("create")  !== false ){
                checkGoalsCount++;
            }
        }
        if ( checkGoalsCount === 6 ) {
            alert("Level Completed Successfully...");
            printBoard();
        }
    }
}


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