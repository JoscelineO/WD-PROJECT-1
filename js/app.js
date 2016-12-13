var Game = Game || {};

Game.nextLevel = function() {
  Game.bubbles+=10;
  Game.giveBackgroundColor();
};

Game.showScore = function() {
  Game.scoreDisplay.show().html(Game.score);
  Game.exit.show().on('click', function() {
    Game.showInstructions();
  });

  setTimeout(function() {
    Game.scoreDisplay.hide();
    Game.exit.hide();
    Game.nextLevel();
  }, 3000);

};

Game.appendSpots = function() {
  $.each(Game.array, function(index, bubble) {
    $('main').append(bubble).hide().fadeIn(1000);
    bubble.on('click', function() {
      if ($(this).css('background-color') === Game.randomColor){
        Game.score++;
      } else {
        Game.score--;
      }
      $('#counter span').html('' + Game.score);
      $(this).remove();
    });

    setTimeout(function() {
      $(bubble).fadeOut(6000, function() {
        $(bubble).remove();
      });
    }, 2000);

  });

  setTimeout(function() {
    Game.showScore();
  }, 8000);
};

Game.makeRandomSpots = function(i) {
  var colorOfSpot;

  if (i <= 4){
    colorOfSpot = this.backgroundColours[0];
  } else if(i <= 8){
    colorOfSpot = this.backgroundColours[1];
  } else if(i <= 12){
    colorOfSpot = this.backgroundColours[2];
  } else if(i <= 16){
    colorOfSpot = this.backgroundColours[3];
  } else if(i <= 18){
    colorOfSpot = this.backgroundColours[4];
  } else {
    colorOfSpot = this.backgroundColours[Math.floor(Math.random()*this.backgroundColours.length)];
  }
  // vary spots size
  var spotSize = ((Math.random()*100) + 50).toFixed();

  // make position sensitive to size and document's width
  var posx = (Math.random() * ($(document).width() - spotSize)).toFixed();
  var posy = (Math.random() * ($(document).height() - spotSize)).toFixed();

  //make spot divs
  var $randomSpot = $('<div/>').css({
    'width': spotSize +'px',
    'height': spotSize +'px',
    'background-color': colorOfSpot,
    'left': posx +'px',
    'top': posy +'px'
  }).attr('class', 'randomSpots');

  Game.array.push($randomSpot);
};

Game.showSpots = function() {
  for (var i = 0; i < this.bubbles; i++) {
    this.makeRandomSpots(i);
  }

  this.appendSpots();
};

Game.giveBackgroundColor = function() {
  var self = this;
  this.randomColor = this.backgroundColours[Math.floor(Math.random()*this.backgroundColours.length)];

  $('main').animate({
    backgroundColor: self.randomColor
  }, 3000, function() {
    setTimeout(function() {
      $('main').animate({
        backgroundColor: '#fff'
      }, 3000, function() {
        self.showSpots();
      });
    }, 1000);
  });
};

Game.showInstructions = function() {
  this.instructions.fadeIn(3000);

  $('.start').on('click', function() {
    Game.instructions.fadeOut(3000);
    setTimeout(function() {
      Game.giveBackgroundColor();
    }, 3000);
  });
};

Game.setup = function() {
  this.backgroundColours = [
    'rgb(46, 66, 114)',
    'rgb(50, 138, 46)',
    'rgb(170, 57, 57)',
    'rgb(89, 42, 113)',
    'rgb(225, 220, 40)'
  ];
  this.score = 0;
  this.instructions = $('.instructions');
  this.instructions.hide();
  this.showInstructions();
  this.scoreDisplay = $('#score');
  this.scoreDisplay.hide();
  this.exit = $('#exit');
  this.exit.hide();
  this.bubbles      = 20;
  this.array        = [];
};

$(Game.setup.bind(Game));
