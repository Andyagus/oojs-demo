function Animals(large,fast,loud){
  this.large = large;
  this.fast = fast;
  this.loud = loud;
}

function Mammels(){
  this.mammels = true;
}

function Fish(){
  this.fish = true;
}

mammels.prototype = new animals("Elephant","Cheetah","Dog");
fish.prototype = new animals("Great White Shark","Marlin","Whale");

var myMammel = new mammels();
var myFish = new fish();

console.log(myMammel.length);
