//Ziyuan Wang
//Rocket Patrol Reloaded v0.1
//18hours
/*
Implement the 'FIRE' UI text from the original game (5)
Add your own (copyright-free) background music to the Play scene (please be mindful of the volume) (5)
Randomize each spaceship's movement direction at the start of each play (5)
Allow the player to control the Rocket after it's fired (5)
Create 4 new explosion sound effects and randomize which one plays on impact (10)
Display the time remaining (in seconds) on the screen (10)
Create a new title screen (e.g., new artwork, typography, layout) (10)
Implement a new timing/scoring mechanism that adds time to the clock for successful hits (15)
*/
//
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
  }

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
