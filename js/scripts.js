var pingPonger = function(n) {
  var text = "";
  for (var i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      text += "<li>div 15!</li><br>";
    }
    else if (i % 5 === 0) {
      text += "<li>div by 5!</li><br> ";
    }
    else if (i % 3 === 0) {
      text += "<li>div by 3!</li><br> ";
    }
    else {
      text += i + "<li><br>";
    }
  }
  return text;
}

$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    alert("got to beginning of the form submit!");
    var n = $("input#value").val();

    var result = pingPonger(n)

    $("#resultDisplay").html(result);

    $("#result").show();
    alert("got to of results");
    event.preventDefault();
  });
});
