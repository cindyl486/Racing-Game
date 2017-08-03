var carPic = document.createElement("img");
var CarPicLoaded = false;

var carX = 75;
var carY = 75;
var carAng = 0;
var carSpeed = 0;

const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.03;

function carImageLoad() {
    carPic.onload = function () {
        CarPicLoaded = true;
    }
    carPic.src = "jellyfish.png";
}

function carReset() {
    for (var eachRow = 0; eachRow < TRACK_ROWS; eachRow++) {
        for (var eachCol = 0; eachCol < TRACK_COLS; eachCol++) {
            var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
            if (trackGrid[arrayIndex] == TRACK_PLAYERSTART) {
                trackGrid[arrayIndex] = TRACK_ROAD;
                carAng = -Math.PI / 2;
                carX = eachCol * TRACK_W + TRACK_W / 2;
                carY = eachRow * TRACK_H + TRACK_H / 2;
            }
        }
    }
}

function carMove() {
    carSpeed *= 0.97;
    // slows car down
    // if carSpeed is negative, the car would reverse backwards
    // if carspeed is >1, car would move faster 

    if (keyHeld_Gas) {
        carSpeed += DRIVE_POWER;
    }
    if (keyHeld_Reverse) {
        carSpeed -= REVERSE_POWER;
    }
    if (keyHeld_TurnLeft) {
        carAng -= TURN_RATE;
    }
    if (keyHeld_TurnRight) {
        carAng += TURN_RATE;
    }

    carX += Math.cos(carAng) * carSpeed;
    carY += Math.sin(carAng) * carSpeed;
}

function carTrackHandling() {
    var carTrackCol = Math.floor(carX / TRACK_W);
    var carTrackRow = Math.floor(carY / TRACK_H);
    var trackIndexUnderCar = rowColToArrayIndex
        (carTrackCol, carTrackRow);

    if (carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
        carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {

        if (isWallAtColRow(carTrackCol, carTrackRow)) {
            // next 2 lines added to fix a bug
            // undoes the car movement which burrows it into the wall
            carX -= Math.cos(carAng) * carSpeed;
            carY -= Math.sin(carAng) * carSpeed;

            carSpeed *= -0.5;
        } //end of track found
    } // end of valid col and rol
} // end of carTrackHandling func


function carDraw() {
    // colorCircle(carX,carY, 10, 'white'); // draw car
    if (CarPicLoaded) {
        drawBitmapCenteredWithRotation(carPic, carX, carY, carAng);
    }
}