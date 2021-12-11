
// https://betterprogramming.pub/how-to-restart-a-css-animation-with-javascript-and-what-is-the-dom-reflow-a86e8b6df00f

const popup = document.querySelector('.s-links-a');
const btn = document.querySelector('.s-links__share');

btn.addEventListener('click', function() {
   
   btn.classList.remove('animate');
   void btn.offsetWidth;
   btn.classList.add('animate');

   popup.classList.toggle('active');
})