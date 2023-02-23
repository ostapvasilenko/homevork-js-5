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

