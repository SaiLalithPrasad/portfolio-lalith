const getBodyClass = localStorage.getItem('class-body-theme');
const getBtnClass = localStorage.getItem('class-btn-theme');
const btnTheme = document.querySelector('.fa-sun');

const isDark = () => document.body.classList.contains('body-dark');

const setTheme = (bodyClassToAdd, bodyClassToRemove, buttonClassToAdd, buttonClassToRemove) => {
	document.body.classList.remove(bodyClassToRemove);
	document.body.classList.add(bodyClassToAdd);
	btnTheme.classList.remove(buttonClassToRemove);
	btnTheme.classList.add(buttonClassToAdd);
	localStorage.setItem('class-body-theme', bodyClassToAdd);
	localStorage.setItem('class-btn-theme', buttonClassToAdd);
};

const toggleTheme = () =>
	isDark()
		? setTheme('body-light', 'body-dark', 'fa-moon', 'fa-sun')
		: setTheme('body-dark', 'body-light', 'fa-sun', 'fa-moon');

const addBodyClass = () => {
	if (getBodyClass === 'body-dark' || getBodyClass == undefined || getBodyClass == null || getBodyClass == '') { setTheme('body-dark', 'body-light', 'fa-sun', 'fa-moon') } else {
		setTheme('body-light', 'body-dark', 'fa-moon', 'fa-sun')
	}
}
const addBtnClass = () => btnTheme.classList.add(getBtnClass);

export { toggleTheme, addBodyClass, addBtnClass };
