const gamearea = document.querySelector(".gamearea");
const playerCar = document.querySelector("#playerCar");
//Speed with which movement happens
const speed = 10;

//We have to implement keyboard events
document.addEventListener("keydown", (event)=>{
if(event){
    console.log("event happened => ", event.keyCode);
    let currentX = parseInt(getComputedStyle(playerCar).left);
    let currentY = parseInt(getComputedStyle(playerCar).top);
    switch (""+event.keyCode) {
        case "37":
            //Move car to left
            playerCar.style.left = currentX-speed +"px"
            break;

        case "39":
            //Move car to right
            playerCar.style.left = currentX+speed +"px"
            break;

        case "38":
            //Move car to top
            playerCar.style.top = currentY-speed +"px"
            break;

        case "40":
             //Move car to bottom
             playerCar.style.top = currentY+speed +"px"
            break;
    }
    updatePos();
}
});

function updatePos(){
    document.querySelector("#gametxt").innerHTML = 'Top: '+parseInt(getComputedStyle(playerCar).top)+', Left: '+parseInt(getComputedStyle(playerCar).left);
}
