module.exports = {
  monster: 'img/enemy.bmp',
  player: 'img/player.bmp',
  explosion: 'img/explode.bmp',
  load: function(uri){
    var image = new Image();
    image.src = uri;
    return image;
  },
};
