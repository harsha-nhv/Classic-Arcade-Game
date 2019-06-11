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
        this.x = this.x+dt*100;
        if(this.x > 500){
            this.x = -200;
        }
        checkCollision()
    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

}
function checkCollision(){
    for(enemy of allEnemies){
        if(enemy.x == player.x && enemy.y == player.y){
            player.x = 2;
            player.y = 5;
        }
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player{
    constructor(){
        this.sprite = 'images/char-boy.png';
        this.x = 200;
        this.y = 400;
    }
    update(dt){

    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(dir){
        if (dir == 'left'){
            if (this.x > 0)
                this.x -= 100;
        }
        else if (dir == 'up'){
            if (this.y > -100)
                this.y -= 100;
        }
        else if (dir == 'right'){
            if(this.x<400)
                this.x += 100;
        }
        else{
            if(this.y<300)
                this.y += 100;
        }
        if(this.y == -100){
            this.x=200;
            this.y=400;
            alert("You won!!!!");
        }
    }
}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let enemy1 = new Enemy(0, 50);
let enemy2 = new Enemy(-200, 130);
let enemy3 = new Enemy(-300, 225);
let enemy4 = new Enemy(-400, 50);
let enemy5 = new Enemy(-500, 225);

let allEnemies = [enemy1,enemy2,enemy3,enemy4,enemy5]

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