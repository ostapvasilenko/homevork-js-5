/* TASK 2 */

const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementsByClassName("close")[0];

function openModal() {
	modal.style.display = "block";
}

function closeModal() {
	modal.style.display = "none";
}

openModalBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);

/* TASK 4 */

let currentColor = 0;
const lights = document.querySelectorAll('.circle');
const changeLight = () => {
	// змінити колір світлофора на наступний
	lights[currentColor].style.backgroundColor = 'gray';
	currentColor = (currentColor + 1) % 3;
	lights[currentColor].style.backgroundColor =
		currentColor === 0 ? 'red' :
			currentColor === 1 ? 'yellow' :
				currentColor === 2 ? 'green' : 'gray';
}

/* TASK 5 */

let selectedBlock = null;

function handleClick(event) {
	const clickedBlock = event.target;

	if (clickedBlock === selectedBlock) {
		return;
	}

	if (selectedBlock) {
		selectedBlock.classList.remove('selected');
	}

	selectedBlock = clickedBlock;
	selectedBlock.classList.add('selected');
}

const blocks = document.querySelectorAll('.block');
blocks.forEach((block) => {
	block.addEventListener('click', handleClick);
});

/* TASK 7 */

window.onload = function () {
	var tree = document.getElementById("tree");
	tree.addEventListener("click", function (event) {
		if (event.target.nodeName === "LI") {
			event.target.classList.toggle("open");
			event.target.classList.toggle("collapsed");
		}
	});
};

/** */

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Устанавливаем размеры canvas
canvas.width = 800;
canvas.height = 400;

// Создаем мяч
var ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 10,
    dx: 5,
    dy: -5
};

// Создаем два игрока
var player1 = {
    x: 50,
    y: canvas.height/2 - 50,
    width: 10,
    height: 100,
    score: 0,
    dy: 0
};

var player2 = {
    x: canvas.width - 60,
    y: canvas.height/2 - 50,
    width: 10,
    height: 100,
    score: 0,
    dy: 0
};

// Отслеживаем нажатия клавиш
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 87) { // клавиша "W"
        player1.dy = -5;
    }
    else if (event.keyCode === 83) { // клавиша "S"
        player1.dy = 5;
    }
    else if (event.keyCode === 38) { // клавиша "Стрелка вверх"
        player2.dy = -5;
    }
    else if (event.keyCode === 40) { // клавиша "Стрелка вниз"
        player2.dy = 5;
    }
});

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 87 || event.keyCode === 83) { // клавиши "W" и "S"
        player1.dy = 0;
    }
    else if (event.keyCode === 38 || event.keyCode === 40) { // клавиши "Стрелка вверх" и "Стрелка вниз"
        player2.dy = 0;
    }
});

// Отрисовываем мяч
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

// Отрисовываем игроков
function drawPlayers() {
    ctx.fillStyle = "white";
    ctx.fillRect(player1.x, player1.y, player1.width, player1.height);
    ctx.fillRect(player2.x, player2.y, player2.width, player2.height);
}

	// Обновляем координаты игроков
function updatePlayers() {
	// Игрок 1
	if (player1.y + player1.dy > 0 && player1.y + player1.dy < canvas.height - player1.height) {
	player1.y += player1.dy;
	}
	// Игрок 2
if (player2.y + player2.dy > 0 && player2.y + player2.dy < canvas.height - player2.height) {
    player2.y += player2.dy;
}
}
// Обновляем координаты мяча
function updateBall() {
	// Движение мяча по горизонтали
	ball.x += ball.dx;
	// Проверка столкновения мяча с правой стенкой
if (ball.x + ball.radius > canvas.width) {
    ball.dx = -ball.dx;
    player1.score++;
}

// Проверка столкновения мяча с левой стенкой
if (ball.x - ball.radius < 0) {
    ball.dx = -ball.dx;
    player2.score++;
}

// Движение мяча по вертикали
ball.y += ball.dy;

// Проверка столкновения мяча с верхней стенкой
if (ball.y - ball.radius < 0) {
    ball.dy = -ball.dy;
}

// Проверка столкновения мяча с нижней стенкой
if (ball.y + ball.radius > canvas.height) {
    ball.dy = -ball.dy;
}

// Проверка столкновения мяча с игроком 1
if (ball.x - ball.radius < player1.x + player1.width &&
    ball.y + ball.radius > player1.y &&
    ball.y - ball.radius < player1.y + player1.height) {
    ball.dx = -ball.dx;
}

// Проверка столкновения мяча с игроком 2
if (ball.x + ball.radius > player2.x &&
    ball.y + ball.radius > player2.y &&
    ball.y - ball.radius < player2.y + player2.height) {
    ball.dx = -ball.dx;
}
}

// Отрисовываем счет
function drawScore() {
ctx.font = "30px Arial";
ctx.fillStyle = "white";
ctx.fillText(player1.score + " : " + player2.score, canvas.width/2 - 50, 50);
}

// Основной цикл игры
function gameLoop() {
// Очищаем canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);
// Обновляем координаты игроков
updatePlayers();

// Обновляем координаты мяча
updateBall();

// Отрисовываем мяч
drawBall();

// Отрисовываем игроков
drawPlayers();

// Отрисовываем счет
drawScore();

// Запускаем следующий кадр через 10 миллисекунд
requestAnimationFrame(gameLoop);
}

// Запускаем игру
gameLoop();