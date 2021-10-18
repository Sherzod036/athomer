document.addEventListener('DOMContentLoaded', () => {
	const popup = document.querySelector('.popup')
	const popup_close = document.querySelector('.popup__close')
	const videoBtn = document.querySelector('.video-icon')

	videoBtn.addEventListener('click', () => {
		popup.classList.add('active')
		document.body.style = 'overflow: hidden'
	})

	popup_close.addEventListener('click', () => {
		popup.classList.remove('active')
		document.body.style = 'overflow: auto'
	})
})
