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

