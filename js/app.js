var Game = Game || {};

Game.nextLevel = function() {
  Game.bubbles+=10;
  Game.giveBackgroundColor();
  Game.score = 0;
};

Game.showScore = function() {
  Game.scoreDisplay.fadeIn(3000).html(Game.score);

  Game.exit.fadeIn(3000).click(function() {
    Game.playing = false;
    Game.scoreDisplay.hide();
    Game.exit.hide();
    Game.showInstructions();
    Game.bubbles      = 20;
  });

  setTimeout(function() {
    Game.scoreDisplay.fadeOut(3000);
    Game.exit.fadeOut(3000).off('click');
    Game.nextLevel();
  }, 6000);
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
  if(this.playing) {
    var self = this;
    this.randomColor = this.backgroundColours[Math.floor(Math.random()*this.backgroundColours.length)];

    $('main').animate({
      backgroundColor: self.randomColor
    }, 3000, function() {
      setTimeout(function() {
        $('main').animate({
          backgroundColor: '#FDFDFD'
        }, 3000, function() {
          self.showSpots();
        });
      }, 1000);
    });
  }
};

Game.showInstructions = function() {
  $('.start').off('click');
  this.instructions.fadeIn(3000);

  $('.start').on('click', function() {
    Game.playing = true;
    Game.instructions.fadeOut(3000);
    setTimeout(function() {
      Game.giveBackgroundColor();
    }, 3000);
  });
};

Game.setup = function() {
  this.backgroundColours = [
    'rgb(52, 89, 149)',
    'rgb(251, 77, 61)',
    'rgb(170, 57, 57)',
    'rgb(32, 163, 158)',
    'rgb(255, 212, 84)'
  ];
  this.score = 0;
  this.instructions = $('.instructions');
  this.exit         = $('#exit');
  this.scoreDisplay = $('#score');
  this.instructions.hide();
  this.scoreDisplay.hide();
  this.scoreDisplay.hide();
  this.exit.hide();
  this.showInstructions();
  this.bubbles      = 20;
  this.array        = [];
  this.playing      = true;
};

$(Game.setup.bind(Game));
