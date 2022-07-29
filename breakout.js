const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.prepend(canvas);
//pikseli svakog objekta kao default vrednost
const game = { grid: 60 };
//////////player objekat/////////
const player = {
  x: game.grid * 6,
  y: game.grid * 8,
  width: game.grid * 2,
  height: game.grid / 2,
  color: "red",
};
////////kraj player objekat//////

/////////key objekat/////////
const keyz = { ArrowLeft: false, ArrowRight: false };
/////kraj key objekat//////

//sirina-visina zavisi od toga kolika je vrednost grida
canvas.setAttribute("width", game.grid * 15);
canvas.setAttribute("height", game.grid * 10);
canvas.style.border = "1px solid black";
//kada budemo pritisnuli dugme keydown
document.addEventListener("keydown", (e) => {
  if (e.code in keyz) {
    keyz[e.code] = true;
  }
});
//kada budemo pritisnuli dugme keyup
document.addEventListener("keyup", (e) => {
  if (e.code in keyz) {
    keyz[e.code] = false;
    console.log(keyz);
  }
});

///////////crtanje player-a///////////
draw();
function draw() {
  ctx.beginPath();
  ctx.rect(player.x, player.y, player.width, player.height);
  ctx.fillStyle = player.color;
  ctx.fill();
  ctx.closePath();
}
///////////////////////////////////////
