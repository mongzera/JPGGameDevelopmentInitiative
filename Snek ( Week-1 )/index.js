/**
 *  Welcome! This is a boilerplate code for a basic Snake game
 *  Created at December 6, 2025 - 5:00 AM
 *  @author Gamat, Ethan Van Q BSCS-3
 * 
 */
 

//This function is called when the browser is finished loading
window.onload = async () => {
    // We call our start function;
    // This is useful when we need so setup things for our game
    start();

}

/////////////////////////////// [GLOBAL VARIABLES] ////////////////////////////////
// These are variables that are shared and used through out the program

//This datatype is called an `Object` in Javascript

const GLOBAL = {}     // Will store global variables in this object
const GAME_STATE = {} // We will store game states in this object


const start = () => {
    console.log("Hello, this is the start of our game!");

    // We set our game's Frames Per Second to 15
    const FPS = 15;

    // We need to access our HTML Canvas Element
    const canvas = document.getElementById('gameCanvas');

    GLOBAL.CTX = canvas.getContext('2d'); // Javascript 2D Rendering API
    GLOBAL.CANVAS_WIDTH = canvas.clientWidth; // the width from our index.html file
    GLOBAL.CANVAS_HEIGHT = canvas.clientHeight; // the height from our index.html file
    GLOBAL.GRID_COUNT = 20; // grid count is the count of grid per axis; it divides our world
    GLOBAL.GRID_SIZE_X = GLOBAL.CANVAS_WIDTH / GLOBAL.GRID_COUNT; // width of a grid in pixels
    GLOBAL.GRID_SIZE_Y = GLOBAL.CANVAS_HEIGHT / GLOBAL.GRID_COUNT; // height of a grid in pixels


    //Now we initialize our game states
    GAME_STATE.SCORE = 0;
    

    // We need a way to draw to our canvas!
    // This is an example of a callback function
    // setInterval is a function that calls gameLoop() every `n` milliseconds
    // since we have an FPS of 15, that means our game must update 15 times every second
    // 1 second = 1000 milliseconds
    // therefore, 1000ms / 15 times = 66.66 millisecond
    // every 66.66 millisecond, our gameLoop() function is executed

    setInterval(()=>{gameLoop()}, 1000 / FPS);
}

const gameLoop= () => {
    console.info('I am updating every 66.66 milliseconds!')

    drawBackground();
    drawGrid();

    //Start here

}

const drawBackground = () => {
    // We fill our canvas with a black screen to remove the old drawing from the previous frame
    GLOBAL.CTX.fillStyle = '#000000';
    GLOBAL.CTX.fillRect(0, 0, GLOBAL.CANVAS_WIDTH, GLOBAL.CANVAS_HEIGHT);
}

const drawGrid = () => {
    // We draw our world grid!
    GLOBAL.CTX.strokeStyle = '#555555';

    //draw vertical lines
    for(let i = 0; i < GLOBAL.GRID_COUNT; i++){
        
        GLOBAL.CTX.beginPath();
        GLOBAL.CTX.moveTo(i * GLOBAL.GRID_SIZE_X, 0);
        GLOBAL.CTX.lineTo(i * GLOBAL.GRID_SIZE_X, GLOBAL.CANVAS_HEIGHT);
        GLOBAL.CTX.stroke();
    }

    //draw horizontal lines
    for(let i = 0; i < GLOBAL.GRID_COUNT; i++){
        GLOBAL.CTX.beginPath();
        GLOBAL.CTX.moveTo(0, i * GLOBAL.GRID_SIZE_Y);
        GLOBAL.CTX.lineTo(GLOBAL.CANVAS_WIDTH, i * GLOBAL.GRID_SIZE_Y);
        GLOBAL.CTX.stroke();
    }
}

