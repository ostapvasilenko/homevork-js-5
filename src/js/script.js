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

/* TASK 3 */

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// // Встановлюємо розмір canvas
canvas.width = 800;
canvas.height = 400;

// Створюємо мяч
var ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 10,
    dx: 5,
    dy: -5
};

// Створюємо два гравця
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

// Відсідковуємо нажимання клавіш
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 87) { // клавіша "W"
        player1.dy = -5;
    }
    else if (event.keyCode === 83) { // клавіша "S"
        player1.dy = 5;
    }
    else if (event.keyCode === 38) { // клавіша "Стрілка вверх"
        player2.dy = -5;
    }
    else if (event.keyCode === 40) { // клавіша "Стрілка вниз"
        player2.dy = 5;
    }
});

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 87 || event.keyCode === 83) { // клавиші "W" и "S"
        player1.dy = 0;
    }
    else if (event.keyCode === 38 || event.keyCode === 40) { // клавиші "Стрілка вверх" и "Стрілка вниз"
        player2.dy = 0;
    }
});

// Відмальовуємо мяч
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

// Відмальовуємо гравців
function drawPlayers() {
    ctx.fillStyle = "white";
    ctx.fillRect(player1.x, player1.y, player1.width, player1.height);
    ctx.fillRect(player2.x, player2.y, player2.width, player2.height);
}

	// Обновлюмо координати гравців
function updatePlayers() {
	// Гравець 1
	if (player1.y + player1.dy > 0 && player1.y + player1.dy < canvas.height - player1.height) {
	player1.y += player1.dy;
	}
	// Гравець 2
if (player2.y + player2.dy > 0 && player2.y + player2.dy < canvas.height - player2.height) {
    player2.y += player2.dy;
}
}
// Обновлюмо координати мяча
function updateBall() {
	// Движение мяча по горизонтали
	ball.x += ball.dx;
	// Перевірка зіткнення мяча з правою стінкою
if (ball.x + ball.radius > canvas.width) {
    ball.dx = -ball.dx;
    player1.score++;
}

// Перевірка зіткнення мяча з лівою стінкою
if (ball.x - ball.radius < 0) {
    ball.dx = -ball.dx;
    player2.score++;
}

// Рух мяча по вертикалі
ball.y += ball.dy;

// Перевірка зіткнення мяча з верхньою стінкою
if (ball.y - ball.radius < 0) {
    ball.dy = -ball.dy;
}

// Перевірка зіткнення мяча з нижньою стінкою
if (ball.y + ball.radius > canvas.height) {
    ball.dy = -ball.dy;
}

// Перевірка зіткнення мяча з гравцем 1
if (ball.x - ball.radius < player1.x + player1.width &&
    ball.y + ball.radius > player1.y &&
    ball.y - ball.radius < player1.y + player1.height) {
    ball.dx = -ball.dx;
}

// Перевірка зіткнення мяча з гравцем 2
if (ball.x + ball.radius > player2.x &&
    ball.y + ball.radius > player2.y &&
    ball.y - ball.radius < player2.y + player2.height) {
    ball.dx = -ball.dx;
}
}

// Малюємо рахунок
function drawScore() {
ctx.font = "30px Arial";
ctx.fillStyle = "white";
ctx.fillText(player1.score + " : " + player2.score, canvas.width/2 - 50, 50);
}

// Основний цикл гри
function gameLoop() {
// Очищаем canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);
// Обновлюємо координати гравців
updatePlayers();

// Обновлюємо координати мяча
updateBall();

// Малюємо мяч
drawBall();

// Малюємо гравців
drawPlayers();

// Малюємо рахунок
drawScore();

// Запускаем наступний кадр через 10 міллісекунд
requestAnimationFrame(gameLoop);
}

// Запускаєм гру!
gameLoop();

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

