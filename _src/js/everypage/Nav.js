const closest = require('closest');

const Nav = function(opts) {
  this.container = opts.el;
  this.trigger = opts.trigger;
  this.buttons = [].slice.call(this.container.querySelectorAll('button'));
  this.buttons.forEach(b =>
    b.addEventListener('click', buttonListener.bind(this))
  );
  this.trigger.addEventListener('click', this.toggleNav.bind(this));

  document.body.addEventListener('click', this.clickHandler.bind(this));
};

// Deactivate sub menus if the user clicks outside of the nav
Nav.prototype.clickHandler = function(e) {
  const nearest = closest(e.target, '.main-nav-menu');
  if (!nearest) this.deactivateAllSubMenus();
};

Nav.prototype.toggleNav = function() {
  this.container.classList.toggle('active');
};

Nav.prototype.toggleSubMenu = function(li) {
  const button = li.querySelector('button');
  const submenu = li.querySelector('ul');
  const buttonStatus =
    button.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
  const submenuStatus =
    submenu.getAttribute('aria-hidden') === 'true' ? 'false' : 'true';
  button.setAttribute('aria-expanded', buttonStatus);
  submenu.setAttribute('aria-hidden', submenuStatus);
};

Nav.prototype.deactivateSubMenu = function(li) {
  const button = li.querySelector('button');
  const submenu = li.querySelector('ul');
  button.setAttribute('aria-expanded', 'false');
  submenu.setAttribute('aria-hidden', 'true');
};

Nav.prototype.deactivateAllSubMenus = function() {
  this.buttons.forEach(b => this.deactivateSubMenu(b.parentNode));
};

function buttonListener(e) {
  // Disable every menu that wasn't just clicked
  this.buttons
    .filter(b => b !== e.target)
    .forEach(b => this.deactivateSubMenu(b.parentNode));
  // Toggle the menu that was just clicked
  this.toggleSubMenu(e.target.parentNode);
}

module.exports = Nav;
