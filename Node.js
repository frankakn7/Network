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
				context.beginPath();
				context.moveTo(this.x, this.y);
				context.lineTo(nodes[i].x,nodes[i].y);
				context.stroke();
				context.closePath();
			}
		}
	}
}

function generateNode(){
	nodes[nodeNum] = new node(Math.floor(Math.random()*canvas.width),Math.floor(Math.random()*canvas.height));
	nodeNum ++;
}

function update(){
	context.clearRect(0,0,canvas.width,canvas.height);
	nodes = [];
	nodeNum = 0;
	for(var i = 0; i < 10; i++){
		generateNode();
	}
	for(var i = 0; i < nodes.length; i++){
		nodes[i].draw();
	}
}

update();