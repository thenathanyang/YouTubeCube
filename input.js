// input.js

"use strict";

document.onkeydown = function(e) {
    switch (e.key) {
        case "ArrowLeft":
            mat4.rotate(rotMatrix, degToRad(4), [0, 1, 0]);
            break;
        case "ArrowRight":
            mat4.rotate(rotMatrix, degToRad(-4), [0, 1, 0]);1
            break;
        case "r":
            mat4.identity(rotMatrix);
    }
}
