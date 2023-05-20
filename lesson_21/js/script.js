
document.addEventListener("click", function (e) {
	const targetElement = e.target;

	if (targetElement.closest('.menu__icon')) {
		document.documentElement.classList.toggle('menu__open');
		e.preventDefault();
	}

})