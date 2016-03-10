var pingPonger = function(n) {
  var text = "";
  for (var i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      text += "Ping Pong <br>";
    }
    else if (i % 5 === 0) {
      text += "Pong <br>";
    }
    else if (i % 3 === 0) {
      text += "Ping<br>";
    }
    else {
      text += i + "<br>";
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
    alert("got to of results");
    event.preventDefault();
  });
});
