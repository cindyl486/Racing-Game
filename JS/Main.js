var canvas, canvasContext;

var blueCar = new carClass();
var greenCar = new carClass();


window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    
    colorRect(0, 0, canvas.wdith, canvas.height, 'black');
    colorText("LOADING IMAGES", canvas.width/2, canvas.height/2, 'white');

    loadImages();
}

function imageLoadingDoneSoStartGame() {
    var framesPerSecond = 30
    setInterval(updateAll, 1000 / framesPerSecond);

    setupInput();  
    greenCar.reset(carPic, "Squirt");
    blueCar.reset(otherCarPic, "Squishy");
}

function updateAll() {
    moveAll();
	drawAll();
}

function moveAll() {
    greenCar.move();
    blueCar.move();
}

/*function clearScreen() {
    colorRect(0, 0, canvas.width, canvas.height, 'white');
}*/

function drawAll() {
    // clearScreen();

    canvasContext.drawImage(backgroundPic, 0, 0);
    greenCar.draw();
    blueCar.draw();
    drawTracks();
}