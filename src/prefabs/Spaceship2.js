// Rocket prefab
class Spaceship2 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
      super(scene, x, y, texture, frame, pointValue);
  
      
      scene.add.existing(this); //add to existing scene
      this.points = pointValue; //store pointValue
      this.moveSpeed = game.settings.spaceshipSpeed;       //pixels per frame
      this.direction = Phaser.Math.RND.sign(); // randomly set direction to -1 or 1

      // flip sprite if moving right
      if (this.direction === 1) {
        this.setScale(-1, 1);
    }
    }

    update(){
        //move spaceship left or right based on direction
        this.x += this.moveSpeed*this.direction;

        // //wrap around from left edge to right edge
        // if (this.x <= 0 - this.width){
        //     this.reset();
        // }
        
        // wrap around from right edge to left edge or vice versa
        if (this.direction === -1 && this.x <= 0 - this.width) {
            this.reset();
        } else if (this.direction === 1 && this.x >= game.config.width + this.width) {
            this.reset();
        }
    }
    
    //position reset
    reset() {
        // randomly set direction to -1 or 1
        this.direction = Phaser.Math.RND.sign();

        // reset position based on direction
        if (this.direction === -1) {
            this.x = game.config.width + this.width;
            this.setScale(1, 1);
        } else {
            this.x = 0 - this.width;
            this.setScale(-1, 1);
        }
    }
  }