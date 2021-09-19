//FileName:		controller.js
//Programmer:	Jasmandeep Kaur, Eric Santillan, Mah Noor
//Date:			  11/11/2020
//Purpose:		This file defines the code for our controller
//The "controller" runs the program and handles events.

let model;
let view; //the "view" is our Canvas
let timer; //used for Task 3 in the lab

function checkKey(event) {
    switch (event.keyCode) {
        //left arrow key was pressed (37 in ASCII)
        case 37: {
            updateRotY(-0.1); //defined in model.js
            break;
        }

        //up arrow key was pressed (38 in ASCII)
        case 38: {
            updateEye(0.2); //defined in model.js
            break;
        }

        //right arrow key was pressed (39 in ASCII)
        case 39: {
            updateRotY(0.1); //defined in model.js
            break;
        }

        //down arrow key was pressed (40 in ASCII)
        case 40: {
            updateEye(-0.2); //defined in model.js
            break;
        }

        //ESC key was pressed
        case 27: {
            resetModel(); //defined in model.js
        }
    }
    //redraw the scene so that we can see changes
    drawModel(); //defined in model.js
}

function controller() {
    //set up the view and the model
    view = initView();  //initView is defined in view.js
    model = initModel(view); //initModel is defined in model.js
 /* 
  let isDrawing = false;
  let x = 0;
  let y = 0;
  gl.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
   });

  gl.addEventListener('mousemove', e => {
    if (isDrawing === true) {
      drawLine(context, x, y, e.offsetX, e.offsetY);
      x = e.offsetX;
      y = e.offsetY;
    }
  });

  window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
      drawLine(context, x, y, e.offsetX, e.offsetY);
      x = 0;
      y = 0;
      isDrawing = false;
    }
  });
  */
    if (model) //make sure everything got initialized before proceeding
    {
        drawModel(); // defined in model.js
        window.onkeydown = checkKey; //call checkKey whenever a key is pressed
    }
    else
    {
        alert('Could not initialize the view and model');
    }
}