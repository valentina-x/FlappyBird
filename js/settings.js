const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");

let frames = 0;
const DEGREE = Math.PI/180;

const sprite = new Image();
sprite.src = "./images/sprite.png";

const SCORE_S = new Audio();
SCORE_S.src = "audio/sfx_point.wav";

const FLAP = new Audio();
FLAP.src = "audio/sfx_flap.wav";

const HIT = new Audio();
HIT.src = "audio/sfx_hit.wav";

const SWOOSHING = new Audio();
SWOOSHING.src = "audio/sfx_swooshing.wav";

const DIE = new Audio();
DIE.src = "audio/sfx_die.wav";

const state = {
    current : 0,
    getReady : 0,
    game : 1,
    over : 2
}

const startBtn = {
    x : 120,
    y : 263,
    w : 83,
    h : 29
}