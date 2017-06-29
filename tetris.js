const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

context.fillStyle = '#000';
context.fillRect(0,0,canvas.width,canvas.height);

const matrix = [
		[0,0,0],
		[1,1,1],
		[0,1,0]
];

function drawMatrix(matrix,offset){
	matrix.forEach((row,y) => {
	 row.forEach((value,x) => {
 		 if(value !== 0){
			 context.fillStyle = 'red';
			 context.fillRect(x + offset.x, y+offset.y, 1, 1);
			}
		}
	}
}

function merge(arena, player){
 player.matrix.forEach((row, y) => {
  row.forEach((value,x));
});
}

function playerDrop(){
 player.pos.y++;
 dropCounter =0;
}

let dropCounter = 0;
let dropInterval = 1000;

 let lastTime = 0;
function update(){
const deltaTime = time - lastTime;
lastTime - time;
console.log(deltaTime);
draw();
requestAnimationFrame(update);
}

const player = {
 pos: {x: 5, y: 5},
 matrix: matrix
};

document.addEventListener('keydown',event => {
 if(event.keyCode === 37){
  player.pos.x--;
}
}

function playerMove(dir){
 player.pos.x += dir;
 if(collide(arena, player)){
  player.pos.x += dir;
}
}

function playerRotate(dir){
  rotate(player.matrix, dir);
 while(collide(arena,matrix)){
  player.pos.x += offset;
  offset = -(offset+(offset> 0?1:-1)); 
  if(offset > player.matrix[0].length){
   rotate(player.matrix, -dir);
   
   return;
}
}
}

function rotate(matrix, dir){
 for(let y=0;y< matrix.length;++y){
 for(let x =0;x<y;++x){
  [
	matrix[x][y],
	matrix[y][x],
  ] = [
	matrix[y][x],
	matrix[x][y],
  ];
}
}
 if(dir > 0){
  
}

}