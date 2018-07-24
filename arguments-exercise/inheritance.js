Function.prototype.inherits = function(parent) {
  function Surrogate(){}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject(x, y){
  this.x = x;
  this.y = y;
}
MovingObject.prototype.move = function(dX, dY) {
  this.x = this.x + dX;
  this.y = this.y + dY;
};

function Ship(x, y, name){
  this.x = x;
  this.y = y;
  this.name = name;
}

function Asteroid(x, y, size){
  this.size = size;
}



Ship.inherits(MovingObject);
const newShip = new Ship(1, 1, "NewShip");
newShip.move(1, 1);

console.log(newShip.x);
console.log(newShip.x);
console.log(newShip.name);
Asteroid.inherits(MovingObject);
