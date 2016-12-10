$(start);

function start(){
  chooseBackgroundColour();
  for (var i = 0; i < 20; i++) {
    makeRandomSpots(i);
  }
}

var backgroundColours = ['#FFC300', '#FF5733', '#C70039', '#900C3F', '#581845'];
var rand = Math.floor(Math.random()*(backgroundColours.length));

function chooseBackgroundColour(){
  $('body').css('background-color', backgroundColours[rand]);
}

function makeRandomSpots(i){
var colorOfSpot;
  if (i <= 4){
    colorOfSpot = backgroundColours[0];
  } else if(i <= 8){
    colorOfSpot = backgroundColours[1];
  } else if(i <= 12){
    colorOfSpot = backgroundColours[2];
  } else if(i <= 16){
    colorOfSpot = backgroundColours[3];
  } else if(i <= 20){
    colorOfSpot = backgroundColours[4];
  }
  // vary size and colour
  var spotSize = ((Math.random()*100) + 50).toFixed();
  // var randomColor = '#'+ Math.round(0xffffff * Math.random()).toString(16);

  // make position sensitive to size and document's width
  var posx = (Math.random() * ($(document).width() - spotSize)).toFixed();
  var posy = (Math.random() * ($(document).height() - spotSize)).toFixed();

  var $randomSpots = $('<div/>').css({
    'width': spotSize +'px',
    'height': spotSize +'px',
    'background-color': colorOfSpot,
    'left': posx +'px',
    'top': posy +'px'
  }).attr('class', 'randomSpots');

  $('body').append($randomSpots).hide().fadeIn(500);

  setTimeout(function() {
    $($randomSpots).fadeOut(5000);
  }, 500);

  $($randomSpots).on('click', function() {
    console.log('clicked');
  });
}

// https://api.jquery.com/event.stoppropagation/
