var carPic = document.createElement("img");
var wallPic = document.createElement("img");
var backgroundPic = document.createElement("img");
var anemonePic = document.createElement("img");
var goalPic = document.createElement("img");
var flagPic = document.createElement("img");


var picsToLoad = 0; // set automatically based on imageList in loadImages()

function countLoadedImagesAndLaunchIfReady() {
    picsToLoad--;
    // console.log(picsToLoad);
    if (picsToLoad == 0) {
        imageLoadingDoneSoStartGame();
    } // wait for images to finish loading
} // end of function

function beginLoadingImage(imgVar, fileName) {
    imgVar.onload = countLoadedImagesAndLaunchIfReady;
    imgVar.src = "Images/"+fileName;
}

// next 3 functions were commented out since helper function (above) was created to shorten the script

/*function carImageLoad() {
    beginLoadingImage(carPic.src, "turtle.png");
}

function trackLoadImages() {
    beginLoadingImage(wallPic.src, "coralwall.png")
}

function backgroundLoadImage() {
    beginLoadingImage(backgroundPic, "waves.png");
    canvasContext.drawImage(backgroundPic, 0, 0);
}*/

function loadImages() {      
    var imageList = [
        { varName: backgroundPic, theFile: "ocean.png"},    
        { varName: carPic, theFile: "turtle.png" },
        { varName: wallPic, theFile: "coralwall.png" },
        { varName: anemonePic, theFile: "Anemone.png" },
        { varName: flagPic, theFile: "flag.png" },
        { varName: goalPic, theFile: "waves.png" }
        ];  

    picsToLoad = imageList.length;
    
    for(var i = 0; i < imageList.length; i++) {
        beginLoadingImage(imageList[i].varName, imageList[i].theFile);
    } // don't have to manually count how many images there are
} // shortcut created 