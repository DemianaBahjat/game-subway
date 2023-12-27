
let player= document.getElementById('player');
let block= document.getElementById('block');
let scoreElement= document.getElementById('score');

score=0;

function moveLeft()
{
  var curLeft= parseInt(window.getComputedStyle(player).getPropertyValue('left'));
  if(curLeft <= 0) return;
  var newLeft= curLeft-100;
  player.style.left=newLeft+"px"

}

function moveRight()
{
  var curLeft= parseInt(window.getComputedStyle(player).getPropertyValue('left'));
  if(curLeft >= 200) return;
  var newLeft= curLeft+100;
  player.style.left=newLeft+"px"

}

document.addEventListener('keydown' , (event) => {
    if(event.key == "ArrowLeft") moveLeft();
    else if (event.key =="ArrowRight") moveRight();
})

block.addEventListener('animationiteration' ,() => {
const randPos=Math.floor((Math.random() *3))*100;
block.style.left=randPos+"px";
scoreElement.innerHTML= `score:${score}`;
score++;
})


setInterval(()=> {
    var playerLeft= parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    var blockLeft= parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    var blockTop= parseInt(window.getComputedStyle(block).getPropertyValue('top'));

    if( playerLeft== blockLeft && blockTop < 450 && blockTop>310){
        alert(`Game over !!!!!!!! \n Your score:${score}`);
        block.style.top= -100 +"px";
        score=0;
        location.reload();
    }
    
}, 1)