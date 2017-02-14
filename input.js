// input.js

"use strict";

document.onkeydown = function(e) {
    switch (e.key) {
        case "ArrowLeft":
            mat4.rotate(rotMatrix, degToRad(4), [0, 1, 0]);
            break;
        case "ArrowRight":
            mat4.rotate(rotMatrix, degToRad(-4), [0, 1, 0]);
            break;
        case "ArrowUp":
            mat4.rotate(rotMatrix, degToRad(4), [1, 0, 0]);
            break;
        case "ArrowDown":
            mat4.rotate(rotMatrix, degToRad(-4), [1, 0, 0]);
            break;
        case "r":
            mat4.identity(rotMatrix);
    }
}
