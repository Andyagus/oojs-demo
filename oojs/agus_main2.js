function Animals(large,fast,loud){
  this.large = large;
  this.fast = fast;
  this.loud = loud;
}

function Mammels(){
  this.Mammels = true;
}

function Fish(){
  this.Fish = true;
}

Mammels.prototype = new Animals("Elephant","Cheetah","Dog");
Fish.prototype = new Animals("Great White Shark","Marlin","Whale");

var myMammel = new Mammels();
var myFish = new Fish();
var inhibitor = 0

if (myMammel.length > inhibitor){
	console.log(inhibitor)
}