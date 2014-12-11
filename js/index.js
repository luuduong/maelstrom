var Game = require('./game.js');
var Clock = require('./clock.js');
var World = require('./world.js');
var Asteroid = require('./asteroid.js');
_ = require('underscore');

var game = new Game();
var world = new World().bindTo(document);
for (var i = 0; i < 10; i ++) {
  world.add(new Asteroid());
}

game.add(new Clock(window).run);
game.add(world.run);
game.run();
