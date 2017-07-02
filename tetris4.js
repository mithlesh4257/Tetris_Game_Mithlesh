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
