const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.prepend(canvas);
//pikseli svakog objekta kao default vrednost
const game = { grid: 40 };
//sirina zavisi od toga kolika je vrednost grida
canvas.setAttribute("width", game.grid * 15);
canvas.setAttribute("height", game.grid * 10);
canvas.style.border = '1px solid black';
