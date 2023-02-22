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



var lights = document.querySelectorAll('#container div');
		var currentLight = 0;

		function changeColor() {
			lights[currentLight].classList.remove('active');
			currentLight = (currentLight + 1) % lights.length;
			lights[currentLight].classList.add('active');
		}

		// set initial active light
		lights[currentLight].classList.add('active');