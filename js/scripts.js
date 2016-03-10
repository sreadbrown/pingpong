var pingPong = function(n) {
  var text = "";
  for (var i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      text += "div 15!";
    }
    else if (i % 5 === 0) {
      text += "div by 5 ";
    }
    else if (i % 3 === 0) {
      text += "div by 3 ";
    }
    else {
      text += i + "<br> ";
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
