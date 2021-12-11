
const popup = document.querySelector('.s-links-a');
const btn = document.querySelector('.s-links__share');

btn.addEventListener('click', function() {
   
   btn.classList.remove('animate');
   void btn.offsetWidth;
   btn.classList.add('animate');

   popup.classList.toggle('active');
})