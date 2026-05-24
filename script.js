const canvas =
document.getElementById("game");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const player = {
x:canvas.width/2,
y:canvas.height/2,
size:25,
speed:5
};

const keys = {};

document.addEventListener(
"keydown",
e => keys[e.key.toLowerCase()] = true
);

document.addEventListener(
"keyup",
e => keys[e.key.toLowerCase()] = false
);

const bullets = [];

document.addEventListener(
"click",
() => {

bullets.push({
x:player.x,
y:player.y,
dx:10,
size:6
});

});

function update(){

if(keys["w"]) player.y -= player.speed;
if(keys["s"]) player.y += player.speed;
if(keys["a"]) player.x -= player.speed;
if(keys["d"]) player.x += player.speed;

bullets.forEach(b => {
b.x += b.dx;
});

}

function draw(){

ctx.clearRect(
0,0,
canvas.width,
canvas.height
);

ctx.fillStyle = "#14ff72";

ctx.beginPath();

ctx.arc(
player.x,
player.y,
player.size,
0,
Math.PI*2
);

ctx.fill();

bullets.forEach(b => {

ctx.fillStyle = "#14b8ff";

ctx.beginPath();

ctx.arc(
b.x,
b.y,
b.size,
0,
Math.PI*2
);

ctx.fill();

});

ctx.strokeStyle =
"rgba(20,255,114,0.15)";

for(let i=0;i<canvas.width;i+=50){

ctx.beginPath();
ctx.moveTo(i,0);
ctx.lineTo(i,canvas.height);
ctx.stroke();

}

for(let i=0;i<canvas.height;i+=50){

ctx.beginPath();
ctx.moveTo(0,i);
ctx.lineTo(canvas.width,i);
ctx.stroke();

}

}

function gameLoop(){

update();
draw();

requestAnimationFrame(
gameLoop
);

}

gameLoop();
