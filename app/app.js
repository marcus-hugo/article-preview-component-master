// alert('hello,marcus!')
const popup = document.querySelector('.s-links-a');
const btn = document.querySelector('.s-links__share');
const icons = document.querySelectorAll('.icon');
const path = document.querySelector('path');

btn.addEventListener('click', function() {
   btn.classList.toggle('spin');
   popup.classList.toggle('active');
})