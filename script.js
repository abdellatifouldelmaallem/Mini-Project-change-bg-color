const colors = ["red","yellow","green","blue","pink","purple","gray","white"];
const hexColor =["#ff0000","#ffff00","#008000","#0000ff","#ffc0cb","#800080","#808080","#ffffff"]

const Btn = document.getElementById('click');



var change = document.getElementById('body');
var codeColor = document.getElementById('hexcolor');

Btn.addEventListener('click',(e)=>{
    e.preventDefault();
    const random = Math.floor(Math.random()*colors.length);
    change.style.backgroundColor = colors[random];
    codeColor.textContent = "Hex Color : "+hexColor[random].toString().toUpperCase()
}
)