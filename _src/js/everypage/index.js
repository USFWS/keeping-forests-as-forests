const captionIcon = document.querySelector('.info-icon');

if (captionIcon) {
  captionIcon.addEventListener('click', function(e) {
    this.parentElement.classList.toggle('active');
  });
}

// const Nav = require('./Nav');
//
// const navigation = new Nav({
//   el: document.querySelector('.main-nav-menu'),
//   trigger: document.querySelector('.nav-trigger')
// });
