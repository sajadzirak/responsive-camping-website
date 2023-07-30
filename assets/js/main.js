const navMenu = document.getElementById('nav-menu')
const toggleBtn = document.getElementById('nav-toggle')
const closeBtn = document.getElementById('close-btn')

toggleBtn.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
})
closeBtn.addEventListener('click', () => navMenu.classList.remove('show-menu'))
document.querySelectorAll('.nav__link').forEach((element) => {
    element.addEventListener('click', () => navMenu.classList.remove('show-menu'))
})