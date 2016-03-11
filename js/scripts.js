var pingPonger = function(n) {
  var pingArray = [];
  for (var i = 1; i <= n; i++) {
      pingArray.push("<li>");
    if (i % 15 === 0) {
      pingArray.push("ping pong<br>");
    }
    else if (i % 5 === 0) {
      pingArray.push("pong<br>");
    }
    else if (i % 3 === 0) {
      pingArray.push("ping<br>");
    }
    else {
      pingArray.push(i);
    }
  }
  return pingArray.join("");
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
