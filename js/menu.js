const megaMenuDrop = document.querySelector('.mega-drop-down');
const megaMenu = document.querySelector('.mega-menu');

//add class to mega menu
function show() {
  megaMenu.style.setProperty('transform', 'translateY(0)', 'important');
  megaMenu.style.setProperty('opacity', 1, 'important');
  megaMenu.style.setProperty('visibility', 'visible', 'important');
}

//remove class from mega menu
function hide() {
  megaMenu.style.setProperty('transform', 'translateY(3rem)', 'important');
  megaMenu.style.setProperty('opacity', 0, 'important');
  megaMenu.style.setProperty('visibility', 'hiddent', 'important');
}

megaMenuDrop.addEventListener('mouseenter', show);
megaMenu.addEventListener('mouseenter', show);
megaMenu.addEventListener('mouseleave', hide);
megaMenuDrop.addEventListener('mouseleave', hide);
