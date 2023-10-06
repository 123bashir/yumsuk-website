//board
var blocksize= 25;
var rows= 20;
var cols= 20;
var e;
var f;
//snake head
var snakex= blocksize*5;
var snakey=blocksize*5;

var foody;
var foodx;

var velocityx=0;
var velocityy=0;
var snakebody=[];
var gameover=false; 
window.onload= function(){
    e=document.getElementById("kano")
    e.height=rows*blocksize;
    e.width=cols*blocksize;
    f=e.getContext("2d")
    placefood()
    // update()
    setInterval(update,1600/10)
    document.addEventListener("keyup", changedirection);

} 
function update() {
    if(gameover){
        return;
    }
    f.fillStyle="black";
    f.fillRect(0,0,e.height,e.width);
    
   f.fillStyle="lime"
   f.fillRect(foodx,foody,blocksize,blocksize);

   
   if(snakex == foodx  && snakey == foody){
    snakebody.push([foodx,foody])
    placefood();
   }

   for (let i=snakebody.length-1; i > 0; i--) {
    snakebody[i]=snakebody[i-1];
   }
   
   if(snakebody.length){
    snakebody[0]=[snakex,snakey];
   }

    f.fillStyle="pink"
    snakex+=velocityx * blocksize;
   snakey+=velocityy * blocksize;
   f.fillRect(snakex,snakey,blocksize,blocksize);
   for (let i = 0; i < snakebody.length; i++) {
   f.fillRect(snakebody[i][0],snakebody[i][1],blocksize,blocksize)
    
   }
if(snakex < 0 || snakex > cols*blocksize || snakey < o || snakey > rows*blocksize){
    gameover=true;
    alert("sorry game over");

}
    for (let i = 0; i < snakebody.length; i++) {
        if(snakex == snakebody[i][0] && snakey == snakebody[i][1]){
            alert("soory game over")
        }
        
    }
}
function changedirection(b) {
    if (b.code=="ArrowUp" && velocityy!=1){
        velocityx=0;
        velocityy=-1;
    }
     else if (b.code=="ArrowDown"  && velocityy!=-1){
        velocityx=0;
        velocityy=1;
    }
    else if (b.code=="ArrowLeft"  && velocityx!=1){
        velocityx=-1;
        velocityy=0;
    }
   else if (b.code=="ArrowRight"  && velocityx!=-1){
        velocityx= 1;
        velocityy=0;
    }
    
}
function placefood() {
    foodx=Math.floor(Math.random()*cols)*blocksize;
    foody=Math.floor(Math.random()*rows)*blocksize;
}