const card = document.querySelectorAll('.ancient-card');
console.log(card);

function addActive() {
	card.classList.toogle("active");	
};

card.addEventListener('click', addActive);