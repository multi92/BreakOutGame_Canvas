const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.prepend(canvas);
//pikseli svakog objekta kao default vrednost
const game = { grid: 60, ani: "" };
const ball = {
  x: game.grid * 7,
  y: game.grid * 5,
  w: game.grid / 3,
  h: game.grid / 3,
  color: "green",
  dx: 5,
  dy: 5,
};
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

/*MOUSE MOVEMENT*/
document.addEventListener("mousemove", (e) => {
  //umesto document.addEventListener mozemo staviti i canvas.addEvenetListener ali cemo onda moci da uzmemo pozicije u canvas board-u
  //ono sto cemo uraditi u addEvent jeste da uzmemo pozicije clientX i clientY
  console.log(e);

  const val = e.clientX - canvas.offsetLeft; //moramo uzeti vrednost u canvasu offsetLeft sto vraca broj piksela u levom uglu(delu)
  //ako je pomeranje misa u canvas delu
  if (val > 0 && val < canvas.width) {
    player.x = val - player.width;
    console.log(player.x);
  }
});
/*MOUSE MOVEMENT KRAJ*/

/*KEYUP MOVEMENT*/
document.addEventListener("keyup", (e) => {
  if (e.code in keyz) {
    keyz[e.code] = false;
    // console.log(keyz);
  }
});
/*KEYUP MOVEMENT KRAJ*/

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

/*BALL MOVEMENT FUNKCIJE*/
function ballmove() {
  //okrenuti smer loptice mnozenjem negativne vrednosti(ako je dx 5 icice u -5)
  if (ball.x > canvas.width || ball.x < 0) {
    ball.dx *= -1;
  }

  if (ball.y > canvas.height || ball.y < 0) {
    ball.dy *= -1;
  }

  ball.x += ball.dx;
  ball.y += ball.dy;
}
/*BALL MOVEMENT FUNKCIJE KRAJ*/

/*FUNCKIJA DRAWPLAYER*/
function drawPlayer() {
  ctx.beginPath();
  ctx.rect(player.x, player.y, player.width, player.height);
  ctx.fillStyle = player.color;
  ctx.fill();
  ctx.closePath();
}
/*FUNCKIJA DRAWPLAYER KRAJ*/

/*FUNCKIJA DRAWBALL*/
function drawBall() {
  ctx.beginPath();
  ctx.strokeStyle = 'white';
  ctx.rect(ball.x, ball.y, ball.w, ball.h);
  ctx.stroke(); // prazan kvadrat
  ctx.closePath();

  //napraviti krug umesto kvadrata
  ctx.beginPath();
  ctx.fillStyle = ball.color;
  let adj = ball.w / 2;
  ctx.arc(ball.x + adj, ball.y + adj, ball.w / 2, 0, Math.PI * 2);
  ctx.fill(); 
  ctx.closePath();
}
/*FUNCKIJA DRAWBALL KRAJ*/

/*FUNCKIJA DRAW*/
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  movement();
  ballmove();
  drawPlayer();
  drawBall();
  //js animacije(prolazi kroz draw funckiju)
  game.ani = requestAnimationFrame(draw);
}
/*FUNCKIJA DRAW KRAJ*/
