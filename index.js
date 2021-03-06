function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var lists = document.querySelectorAll('.ranked-list');
  for (var i in lists) {
    var list = lists[i].children;
    for (var j in list) {
      list[j].innerHTML = parseInt(list[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  var grand = document.querySelector('#grand-node');
  var next = grand.children[0];
  while(next) {
    grand = next;
    next = grand.children[0];
  }
  return grand;
}