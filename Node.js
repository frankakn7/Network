var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var nodes = []
var nodeNum = 0;

function node(x,y){
	this.x = x;
	this.y = y;
	
	this.draw = function(){
		for(var i = 0; i < nodes.length; i++){
			if(nodes[i].x === this.x && nodes[i].y === this.y){
				continue;
			}else{
				context.moveTo(this.x, this.y);
				context.lineTo(nodes[i].x,nodes[i].y);
				context.stroke();
			}
		}
	}
}

function generateNode(){
	nodes[nodeNum] = new node(Math.floor(Math.random()*canvas.width),Math.floor(Math.random()*canvas.height));
	nodeNum ++;
}

for(var i = 0; i < 10; i++){
	generateNode();
}

function update(){
	context.clearRect(0,0,canvas.width,canvas.height);
	for(var i = 0; i < nodes.length; i++){
		nodes[i].draw();
	}
}

update();