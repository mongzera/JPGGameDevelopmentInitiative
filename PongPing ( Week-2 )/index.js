/**
 *  Welcome! This is a boilerplate code for a basic Ping Pong game
 *  Created at December 8, 2025 - 11:30 PM
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

    // We set our game's Frames Per Second to 60
    const FPS = 60;

    // We need to access our HTML Canvas Element
    const canvas = document.getElementById('gameCanvas');

    GLOBAL.CTX = canvas.getContext('2d'); // Javascript 2D Rendering API
    GLOBAL.CANVAS_WIDTH = canvas.clientWidth; // the width from our index.html file
    GLOBAL.CANVAS_HEIGHT = canvas.clientHeight; // the height from our index.html file
    GLOBAL.GRID_SIZE_X = GLOBAL.CANVAS_WIDTH / GLOBAL.GRID_COUNT; // width of a grid in pixels
    GLOBAL.GRID_SIZE_Y = GLOBAL.CANVAS_HEIGHT / GLOBAL.GRID_COUNT; // height of a grid in pixels


    //Now we initialize our game states
    GAME_STATE.PLAYER_A_SCORE = 0; // player on the left
    GAME_STATE.PLAYER_B_SCORE = 0; // player on the right
    

    // We need a way to draw to our canvas!
    // This is an example of a callback function
    // setInterval is a function that calls gameLoop() every `n` milliseconds
    // since we have an FPS of 60, that means our game must update 60 times every second
    // 1 second = 1000 milliseconds
    // therefore, 1000ms / 60 times = 16.66 millisecond
    // every 16.66 millisecond, our gameLoop() function is executed

    setInterval(()=>{gameLoop()}, 1000 / FPS);
}

const gameLoop= () => {
    console.info('I am updating every 16.66 milliseconds!')

    drawBackground();
    drawLine();

    
    //Start here

    /**
     *  1) Draw your paddles for both players
     *  2) Draw the ball
     *  3) Make the ball move
     *  4) If paddle hits the ball, then what?
     * 
     * 
     * */ 
    

}

const drawBackground = () => {
    // We fill our canvas with a black screen to remove the old drawing from the previous frame
    GLOBAL.CTX.fillStyle = '#000000';
    GLOBAL.CTX.fillRect(0, 0, GLOBAL.CANVAS_WIDTH, GLOBAL.CANVAS_HEIGHT);
}

const drawLine = () => {
    // We draw our court line
    GLOBAL.CTX.strokeStyle = '#FFF';

    //draw vertical lines
    const lineLength = 15; //in pixels
    const numberOfLines = GLOBAL.CANVAS_HEIGHT / lineLength;
    for(let i = 0; i < numberOfLines; i++){

        if(i % 2 == 0) continue;
        
        GLOBAL.CTX.save(); // push the current settings to the stack, so that the current setting of CTX is saved.

        //now, we can safely change the setting of CTX
        //we change the lineWidth
        GLOBAL.CTX.lineWidth = 4;
        GLOBAL.CTX.beginPath();
        GLOBAL.CTX.moveTo( GLOBAL.CANVAS_WIDTH * 0.5, i * lineLength);
        GLOBAL.CTX.lineTo( GLOBAL.CANVAS_WIDTH * 0.5, i * lineLength + lineLength);
        GLOBAL.CTX.stroke();

        GLOBAL.CTX.restore(); // now, we pop the setting from the stack. this means we are restoring our saved setting
    }


}

