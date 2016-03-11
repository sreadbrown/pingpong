var pingPonger = function(n) {
  var text = "";
  for (var i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      text += "<li>ping pong</li>";
    }
    else if (i % 5 === 0) {
      text += "<li>pong</li>";
    }
    else if (i % 3 === 0) {
      text += "ping<br>";
    }
    else {
      text += i + "<li>";
    }
  }
  return text;
};

$(document).ready(function() {
  $("form#game").submit(function(event) {

    var n = $("input#value").val();

    var result = pingPonger(n);

    $("#resultDisplay").html(result);

    $("#result").show();

    event.preventDefault();
  });
});
