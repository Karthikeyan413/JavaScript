var a=document.querySelectorAll("td")
var b=document.querySelector("#b")

function clearboard() {
  for(var i=0;i<a.length;i++){
    a[i].textContent="";
  }
}
b.addEventListener("click",clearboard);

var toggle = 0;
function change(){
  if(this.textContent==""){
    if(toggle == 0){
        this.textContent="x";
        toggle = 1;
    }
    else{
      this.textContent="o";
      toggle = 0;
    }
  }
}
for (var i = 0; i < a.length; i++) {
    a[i].addEventListener("click",change);
}

const row = [[0,1,2],[3,4,5],[6,7,8]];
const col = [[0,3,6],[1,4,7],[2,5,8]];
const dia = [[0,4,8],[2,4,6]];
var count = 0;
function check(){
  [row,col,dia].forEach(item => {
    item.forEach( i => {
      count = 0;
      i.forEach( j => {
        if(a[j].textContent == "x"){
          count++;
        }
        else if(a[j].textContent == "o"){
          count--;
        }
      });
      if(count == 3 || count == -3){
        if(count == 3){
          document.querySelector('.winner').textContent = "X Won";
        }
        else {
          document.querySelector('.winner').textContent = "O Won";
        }
        setTimeout(clearboard,1000);
      }
    });
  });
}
for (var i = 0; i < a.length; i++) {
    a[i].addEventListener("click",check);
}
