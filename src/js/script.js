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
