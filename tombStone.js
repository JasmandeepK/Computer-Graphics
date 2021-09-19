
//FileName:		tombStone.js
//Programmer:	Jasmandeep Kaur, Eric Santillan, Mah Noor
//Date:			11/11/2020
//Purpose:		This file defines the code for a tombstone

function drawTombStone(gl, color, x_axis, y_axis, model_matrix, translate) {
    vec = [translate[0], translate[1], translate[2]];
    scale = [1.0, 1.0, 1.0];
    model_matrix = mat4.translate(model_matrix, mat4.identity(model_matrix), vec);
    model_matrix = mat4.rotate(model_matrix, model_matrix,3.14159, y_axis); //NOTE: angle in radians
    model_matrix = mat4.scale(model_matrix, model_matrix, scale);
    gl.uniformMatrix4fv(modelMatrixLoc, false, model_matrix);//send the updated model matrix to the shaders
    gl.bindTexture(gl.TEXTURE_2D, graveTex); //use the yosemiteTex for this square
    drawTexSquare(gl, color, 10.0); //defined in texsquare.js
    vec = [translate[3], translate[4], translate[5]]; //position of texsquare #2 in the scene
    // scale = [1.0, 1.0, 1.0];
    // model_matrix = mat4.translate(model_matrix, mat4.identity(model_matrix), vec);
    // model_matrix = mat4.rotate(model_matrix, model_matrix,0, y_axis); //NOTE: angle in radians
    // model_matrix = mat4.scale(model_matrix, model_matrix, scale);
    // gl.uniformMatrix4fv(modelMatrixLoc, false, model_matrix);//send the updated model matrix to the shaders
    // gl.bindTexture(gl.TEXTURE_2D, annabelleTex); //use the yosemiteTex for this square
    // drawTexSquare(gl, color, 10.0); //defined in texsquare.js
    // vec = [translate[6], translate[7], translate[8]]; //position of texsquare #2 in the scene
    scale = [0.25, 1.0, 1.0];
    model_matrix = mat4.translate(model_matrix, mat4.identity(model_matrix), vec);
    model_matrix = mat4.rotate(model_matrix, model_matrix,6.28318530718/4, y_axis); //NOTE: angle in radians
    model_matrix = mat4.scale(model_matrix, model_matrix, scale);
    gl.uniformMatrix4fv(modelMatrixLoc, false, model_matrix);//send the updated model matrix to the shaders
    gl.bindTexture(gl.TEXTURE_2D, colorTex); //use the yosemiteTex for this square
    drawTexSquare(gl, color, 10.0); //defined in texsquare.js
    vec = [translate[9], translate[10], translate[11]]; //position of texsquare #2 in the scene
    scale = [0.25, 1.0, 1.0];
    model_matrix = mat4.translate(model_matrix, mat4.identity(model_matrix), vec);
    model_matrix = mat4.rotate(model_matrix, model_matrix,-6.28318530718/4, y_axis); //NOTE: angle in radians
    model_matrix = mat4.scale(model_matrix, model_matrix, scale);
    gl.uniformMatrix4fv(modelMatrixLoc, false, model_matrix);//send the updated model matrix to the shaders
    gl.bindTexture(gl.TEXTURE_2D, colorTex); //use the yosemiteTex for this square
    drawTexSquare(gl, color, 10.0); //defined in texsquare.js
    vec = [translate[12], translate[13], translate[14]]; //position of texsquare #2 in the scene
    scale = [1.0, 0.25, 1.0];
    model_matrix = mat4.translate(model_matrix, mat4.identity(model_matrix), vec);
    model_matrix = mat4.rotate(model_matrix, model_matrix,-6.28318530718/4, x_axis); //NOTE: angle in radians
    model_matrix = mat4.scale(model_matrix, model_matrix, scale);
    gl.uniformMatrix4fv(modelMatrixLoc, false, model_matrix);//send the updated model matrix to the shaders
    gl.bindTexture(gl.TEXTURE_2D, colorTex); //use the yosemiteTex for this square
    drawTexSquare(gl, color, 10.0); //defined in texsquare.js
    vec = [translate[15], translate[16], translate[17]]; //position of texsquare #2 in the scene
    scale = [1.0, 2.0, 1.0];
    model_matrix = mat4.translate(model_matrix, mat4.identity(model_matrix), vec);
    model_matrix = mat4.rotate(model_matrix, model_matrix,6.28318530718/4, x_axis); //NOTE: angle in radians
    model_matrix = mat4.scale(model_matrix, model_matrix, scale);
    gl.uniformMatrix4fv(modelMatrixLoc, false, model_matrix);//send the updated model matrix to the shaders
    gl.bindTexture(gl.TEXTURE_2D, dirtTex); //use the yosemiteTex for this square
    drawTexSquare(gl, color, 10.0); //defined in texsquare.js
}