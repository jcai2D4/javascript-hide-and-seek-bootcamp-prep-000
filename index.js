function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  var getNodes = document.querySelector('#grand-node')

}

function increaseRankBy(n){
  var rank = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < rank.length; i++){
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n
  }
}