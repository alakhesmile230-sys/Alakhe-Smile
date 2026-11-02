 document.addEventListener('DOMContentLoaded', function() {
// 1. Footer year - works on all pages
var yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


var hamburger = document.querySelector('.hamburger') || document.getElementById('hamburger') || document.querySelector('.menu-toggle') || document.querySelector('.nav-toggle');
var navList = document.querySelector('nav ul') || document.querySelector('.nav-links') || document.getElementById('nav-links');

if (hamburger && navList) {
hamburger.addEventListener('click', function() {
navList.classList.toggle('show');
hamburger.classList.toggle('active');
});

navList.querySelectorAll('a').forEach(function(link) {
link.addEventListener('click', function() {
navList.classList.remove('show', 'open', 'active');
navList.style.display = '';
hamburger.classList.remove('active');
});
});
}
console.log('Baked with a Smile loaded');
});
