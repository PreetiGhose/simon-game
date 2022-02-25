var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
function nextSequence() {
  var a = Math.random();
  var randomNumber = Math.round(a * 3);

  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.muted = true;
  console.log("sounds/" + randomChosenColor + ".mp3")
  audio.play();
}

nextSequence();
