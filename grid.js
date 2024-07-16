var n=parseInt(window.prompt("enter how many grids you want"));
var parent=document.getElementsByClassName('a')[0];
var grid=[];
var r=0;
var c=0;
var score=0;

var scoreElement = document.createElement('div');
scoreElement.style.height='10%';
scoreElement.style.width='20%';
scoreElement.style.display='flex';
scoreElement.style.justifyContent='center';
scoreElement.style.alignItems='center';
scoreElement.style.margin = '40px';
scoreElement.style.fontSize = '30px';
scoreElement.style.background='linear-gradient(to top,black,white)';
scoreElement.textContent = 'Score: ' + score;
document.body.appendChild(scoreElement);

var imgelement=document.createElement('img');
imgelement.src='http://orig12.deviantart.net/50f7/f/2014/341/6/b/him_run__animation__by_dog_san-d892e52.png';
imgelement.style.backgroundRepeat='no-repeat';
imgelement.style.backgroundSize='100% 100%';

var randomimg=document.createElement('img');
randomimg.src='https://png.pngtree.com/png-vector/20191009/ourlarge/pngtree-dog-food-vector-illustration-isolated-on-white-background-dog-food-clip-png-image_1805153.jpg';
randomimg.style.backgroundRepeat='no-repeat';
randomimg.style.backgroundSize='100% 100%';
if(n<7){
for(let i=0;i<n;i++){
    var row=document.createElement('div');
    row.style.display='flex';
    var rowcell=[];
    for(let j=0;j<n;j++){
      var div=document.createElement('div');
      div.style.height='120px';
      div.style.width='120px';
      div.style.margin='2px';
      div.style.backgroundColor='lightpink';
      row.appendChild(div);
      rowcell.push(div);
}
parent.appendChild(row);
grid.push(rowcell);
}
grid[0][0].appendChild(imgelement);
Random();
}
else{
    alert("please enter the number in between the range 1 to 6");
}

function Random(){
  var rr=Math.floor(Math.random()*n);
  var rc=Math.floor(Math.random()*n);
  while(rr==r && rc==c){
    rr=Math.floor(Math.random()*n);
    rc=Math.floor(Math.random()*n);
  }
  grid[rr][rc].appendChild(randomimg);
  randomimg.dataset.row=rr;
  randomimg.dataset.col=rc;
}
 
function upgradegrid(){
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      grid[i][j].style.backgroundColor='lightpink';
      if(grid[i][j].contains(imgelement)){
        grid[i][j].removeChild(imgelement);
      }
    }
  }
  // grid[r][c].style.backgroundImage="url('http://orig12.deviantart.net/50f7/f/2014/341/6/b/him_run__animation__by_dog_san-d892e52.png')";
  // grid[r][c].style.backgroundSize='100% 100%';
  // grid[r][c].style.backgroundRepeat='no-repeat';
  grid[r][c].appendChild(imgelement);
  if(r ==randomimg.dataset.row && c==randomimg.dataset.col){
    score++;
    scoreElement.textContent='Score:'+score;
    Random();
  }
}
function move(dir){
     switch(dir){
      case 'up':
        if (r>0){
          r--;
        }
        else{
          alert("cannot be moved further");
        }
        break;
      case 'left':
        if(c>0){
          c--;
        }
        else{
          alert("cannot be moved further");
        }
        break;
      case 'right':
        if(c<n-1){
          c++;
        }
        else{
          alert("cannot be moved further");
        }
        break;
      case 'down':
        if(r<n-1){
          r++;
        }
        else{
          alert("cannot be moved further");
        }
        break;
     }
     upgradegrid();
}