const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.prepend(canvas);
//pikseli svakog objekta kao default vrednost
const game = { grid: 60, ani: "" };

/* PLAYER OBJEKAT */
const player = {
  x: game.grid * 6,
  y: game.grid * 8,
  width: game.grid * 2,
  height: game.grid / 2,
  color: "red",
  speed: 5,
};
/*  KRAJ PLAYER OBJEKTA*/

/*KEY OBJEKAT*/
const keyz = { ArrowLeft: false, ArrowRight: false };
/*KEY OBJEKAT KRAJ*/

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
    // console.log(keyz);
  }
});

game.ani = requestAnimationFrame(draw);

/*MOVEMENT FUNCKIJA*/
function movement() {
  if (keyz.ArrowLeft) {
    player.x -= player.speed;
  }
  if (keyz.ArrowRight) {
    player.x += player.speed;
  }
}
/*PALEYR CRTANJE*/
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  movement();
  ctx.beginPath();
  ctx.rect(player.x, player.y, player.width, player.height);
  ctx.fillStyle = player.color;
  ctx.fill();
  ctx.closePath();
  //js animacije(prolazi kroz draw funckiju)
  game.ani = requestAnimationFrame(draw);
}

