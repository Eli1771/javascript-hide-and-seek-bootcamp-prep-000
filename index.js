function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var ranked = document.querySelectorAll('.ranked-list');
  for (var i in ranked) {
    var rank = parseInt(ranked[i].innerHTML);
    
  }
}