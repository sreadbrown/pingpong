var pingPong = function(n) {
  var text = "";
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      text += "ping";
    }
    else {
      text += i + "<br>";
    }
  }
  return text;
}




// if (i % 5 === 0) {
//   return pong
// }
// if (i % 5 === 0 || i % 5 === 0)
// else {
//   return text += i
// }
