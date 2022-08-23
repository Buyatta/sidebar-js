const sidebarToggle = document.querySelector('.sidebar-toggle')
const button = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

sidebarToggle.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar')
})