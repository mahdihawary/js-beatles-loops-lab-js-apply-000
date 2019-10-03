// add solution here
 
function theBeatlesPlay(musicians,instruments){
  var beatles=[]
  for(var x=0;x<musicians.length;x++ ){
    beatles.push(musicians[x] + " plays " + instruments[x])
  }
  return beatles;
}

function iLoveTheBeatles(n){
  var love=[]
  
  do{
    love.push("I love the Beatles!")
    n++
  }
  while(n<15)
}
