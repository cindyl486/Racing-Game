var canvas, canvasContext;

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
    carReset();
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
    carMove();
    carTrackHandling();
}

/*function clearScreen() {
    colorRect(0, 0, canvas.width, canvas.height, 'white');
}*/

function drawAll() {
    // clearScreen();

    canvasContext.drawImage(backgroundPic, 0, 0);
    loadImages();
    carDraw();
    drawTracks();
}