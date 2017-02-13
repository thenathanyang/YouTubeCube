// input.js

"use strict";

document.onkeydown = function(e) {
    switch (e.key) {
        case "c":
            // cycle colors using built-in JavaScript array functions
            colors.unshift(colors.pop());
            break;
        case "ArrowUp":
            // move camera up by 0.25 units
            cMat = mult(translate(0, -0.25, 0), cMat);
            break;
        case "ArrowDown":
            // move camera down by 0.25 units
            cMat = mult(translate(0, 0.25, 0), cMat);
            break;
        case "ArrowLeft":
            // rotate camera left by 4 degrees
            // rotating using quaternions
            //cMat = mult(rotate(-4, vec3(0, 1, 0)), cMat);
            cMat = mult(quaternion(Math.cos(radians(-4)/2), 0, Math.sin(radians(-4)/2), 0), cMat);
            break;
        case "ArrowRight":
            // rotate camera right by 4 degrees
            // rotating using quaternions
            //cMat = mult(rotate(4, vec3(0, 1, 0)), cMat);
            cMat = mult(quaternion(Math.cos(radians(4)/2), 0, Math.sin(radians(4)/2), 0), cMat);
            break;
        case "r":
            // reset camera, cube colors, and animation
            cMat = translate(0, 0, -40);
            fov = 45;
            isCrosshairDisplayed = false;
            colors = defaultColors.slice();
            cubeAngle = 0;
            cubeScale = 1.0;
            grow = true;
            break;
        case "i":
            // move camera forward by 0.25 units
            cMat = mult(translate(0, 0, 0.25), cMat);
            break;
        case "j":
            // move camera left by 0.25 units
            cMat = mult(translate(0.25, 0, 0), cMat);
            break;
        case "k":
            // move camera right by 0.25 units
            cMat = mult(translate(-0.25, 0, 0), cMat);
            break;
        case "m":
            // move camera back by 0.25 units
            cMat = mult(translate(0, 0, -0.25), cMat);
            break;
        case "n":
            // narrow FOV by 1 degree
            fov -= 1;
            break;
        case "w":
            // widen FOV by 1 degree
            fov += 1;
            break;
        case "+":
            // toggle display of orthographic crosshair
            isCrosshairDisplayed = !isCrosshairDisplayed;
            break;
    }
}
