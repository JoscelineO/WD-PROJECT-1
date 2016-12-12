var Game = Game || {};

Game.makeRandomSpots = function(i) {
  var colorOfSpot;

  if (i <= 8){
    colorOfSpot = this.backgroundColours[0];
  } else if(i <= 16){
    colorOfSpot = this.backgroundColours[1];
  } else if(i <= 24){
    colorOfSpot = this.backgroundColours[2];
  } else if(i <= 32){
    colorOfSpot = this.backgroundColours[3];
  } else if(i <= 40){
    colorOfSpot = this.backgroundColours[4];
  }
  // vary spots size
  var spotSize = ((Math.random()*100) + 50).toFixed();

  // make position sensitive to size and document's width
  var posx = (Math.random() * ($(document).width() - spotSize)).toFixed();
  var posy = (Math.random() * ($(document).height() - spotSize)).toFixed();

  //make spot divs
  var $randomSpots = $('<div/>').css({
    'width': spotSize +'px',
    'height': spotSize +'px',
    'background-color': colorOfSpot,
    'left': posx +'px',
    'top': posy +'px'
  }).attr('class', 'randomSpots');

  $('main').append($randomSpots).hide().fadeIn(2000);

  $($randomSpots).on('click', function() {

    if ($(this).css('background-color') === Game.randomColor){
      Game.score++;
    } else {
      Game.score--;
    }
    $('#counter span').html('' + Game.score);
    $(this).remove();
  });

  setTimeout(function() {
    $($randomSpots).fadeOut(7000, function(){
      $($randomSpots).remove();
    });
  }, 1000);

};

Game.showSpots = function() {
  for (var i = 0; i < 40; i++) {
    this.makeRandomSpots(i);
  }
};

Game.giveBackgroundColor = function() {
  var self = this;
  this.randomColor = this.backgroundColours[Math.floor(Math.random()*this.backgroundColours.length)];

  $('main').animate({
    backgroundColor: self.randomColor
  }, 1000, function() {
    $('main').animate({
      backgroundColor: '#fff'
    }, 2000);
    setTimeout(function(){
      self.showSpots();
    }, 2000);

  });


  //   setTimeout(function() {
  //     $('main').css('background', '#fff');
  //     self.showSpots();
  //   }, 3000
  // );
};


Game.setup = function() {
  this.backgroundColours = ['rgb(46, 66, 114)', 'rgb(50, 138, 46)', 'rgb(170, 57, 57)', 'rgb(89, 42, 113)', 'rgb(225, 220, 40)'];
  this.score = 0;
  this.giveBackgroundColor();
};

$(Game.setup.bind(Game));
