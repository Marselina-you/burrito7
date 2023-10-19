const btns = document.querySelectorAll('.login-button');
const modalOverlay = document.querySelector('.modal-login-overlay ');
const modals = document.querySelectorAll('.modal-login');

const btnCard = document.querySelectorAll('.card-btn-popup');
const modalOverlayCard = document.querySelector('.modal-card-overlay ');
const modalsCard = document.querySelectorAll('.modal-card');


btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal-login--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal-login--visible');
		modalOverlay.classList.add('modal-login-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {


	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-login-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal-login--visible');
		});
	}
});

btnCard.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modalsCard.forEach((el) => {
			el.classList.remove('modal-card--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal-card--visible');
		modalOverlayCard.classList.add('modal-card-overlay--visible');
	});
});

modalOverlayCard.addEventListener('click', (e) => {


	if (e.target == modalOverlayCard) {
		modalOverlayCard.classList.remove('modal-card-overlay--visible');
		modalsCard.forEach((el) => {
			el.classList.remove('modal-card--visible');
		});
	}
});
