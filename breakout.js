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
/*KEYDOWN MOVEMENT*/
document.addEventListener("keydown", (e) => {
  if (e.code in keyz) {
    keyz[e.code] = true;
  }
});
/*KEYDOWN MOVEMENT KRAJ*/
document.addEventListener("mousemove", (e) => {
  //umesto document.addEventListener mozemo staviti i canvas.addEvenetListener ali cemo onda moci da uzmemo pozicije u canvas board-u
  //ono sto cemo uraditi u addEvent jeste da uzmemo pozicije clientX i clientY
  console.log(e);

  const val = e.clientX - canvas.offsetLeft; //moramo uzeti vrednost u canvasu offsetLeft sto vraca broj piksela u levom uglu(delu)

  //ako je pomeranje misa u canvas delu
  if (player.width > 0 && val < canvas.width) {
    player.x = val - player.width;
    console.log(player.x);
  }
});
/*KEYUP MOVEMENT*/
document.addEventListener("keyup", (e) => {
  if (e.code in keyz) {
    keyz[e.code] = false;
    // console.log(keyz);
  }
});
/*KEYUP MOVEMENT KRAJ*/

/*MOUSE MOVEMENT*/

/*MOUSE MOVEMENT KRAJ*/

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
/*MOVEMENT FUNCKIJA KRAJ*/
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
/*PALEYR CRTANJE KRAJ*/
