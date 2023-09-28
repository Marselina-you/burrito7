const btns = document.querySelectorAll('.login-button');
const modalOverlay = document.querySelector('.modal-login-overlay ');
const modals = document.querySelectorAll('.modal-login');
console.log(modalOverlay);
console.log(modals);
console.log(btns);

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
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-login-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal-login--visible');
		});
	}
});
