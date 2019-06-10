/*
// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
*/
class Enemy{

    constructor(x, y){
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
    }

    update(dt){
        this.x = this.x+dt;
        if(this.x > 5){
            this.x = -2;
        }

    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x*100, this.y*50);
    }

}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player{
    constructor(){
        this.sprite = 'images/char-boy.png';
        this.x = 2;
        this.y = 5;
    }
    update(dt){

    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x*100, this.y*85);
    }
    handleInput(dir){
        if (dir == 'left'){
            if (this.x > 0)
                this.x -= 1;
        }
        else if (dir == 'up'){
            if (this.y > -1)
                this.y -= 1;
        }
        else if (dir == 'right'){
            if(this.x<4)
                this.x += 1;
        }
        else{
            if(this.y<5)
                this.y += 1;
        }
        
    }
}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let enemy1 = new Enemy(-1, 1);
let enemy2 = new Enemy(-2, 3);
let enemy3 = new Enemy(-3, 4.5);
let enemy4 = new Enemy(-4, 1);
let enemy5 = new Enemy(-5, 4.5)

let allEnemies = [enemy1, enemy2, enemy3, enemy4,enemy5]

let player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});