var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var nodes = []
var nodeNum = 0;

function node(x,y,color){
	this.x = x;
	this.y = y;
	this.color = color;
	this.connected = false;
	
	this.draw = function(){
		for(var i = 0; i < nodes.length; i++){
			if(nodes[i].x === this.x && nodes[i].y === this.y){
				continue;
			}else{
				if(nodes[i].connected === false){
					context.strokeStyle = this.color;
					context.beginPath();
					context.moveTo(this.x, this.y);
					context.lineTo(nodes[i].x,nodes[i].y);
					context.stroke();
					context.closePath();
				}else{
					continue;
				}
			}
		}
		this.connected = true;
	}
}

function generateNode(){
	nodes[nodeNum] = new node(Math.floor(Math.random()*canvas.width),Math.floor(Math.random()*canvas.height),randomColor());
	nodeNum ++;
}

function expand(){
	generateNode();
	//context.clearRect(0,0,canvas.width,canvas.height);
	for(var i = 0; i < nodes.length; i++){
		nodes[i].connected = false;
	}
	nodes[nodes.length - 1].draw();
}

function update(){
	context.clearRect(0,0,canvas.width,canvas.height);
	nodes = [];
	nodeNum = 0;
	for(var i = 0; i < 8; i++){
		generateNode();
	}
	for(var i = 0; i < nodes.length; i++){
		nodes[i].draw();
	}
}

update();