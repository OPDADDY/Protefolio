const canvas = document.getElementById("pong")

const context = canvas.getContext ("2d")

context.fillstyle = "black";
context.fillRect( 100, 200, 50, 75);
context.beginPath();
context.arc( 300, 350, 100, 0, Math.PI*2, false);x

context.closePath();


function drawRect(x, y, w, h);{

ctx.fillstyle = color;
ctx.fillRect = (x, y, w, h);

}
function drawCircle(x, y, r, color){
ctx.fillstyle = color;
ctx.beginPath();
ctx.arc(x, y, r, 0, Math.PI*2, false);
ctx.closePath();
ctx.fillstyle();

}

function drawText(text, x, y, color){
    
ctx.fillstyle = color;
ctx.font = "75px fantasy";
ctx.fillText(text, x, y);
}