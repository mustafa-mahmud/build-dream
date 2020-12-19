const megaMenuDropdown = document.querySelector('.mega-menu-dropdown');
const headerMega = document.querySelector('.header__mega');

function showHide(opacity, translate, visibility) {
  headerMega.style.setProperty('opacity', opacity, 'important');
  headerMega.style.setProperty('transform', translate, 'important');
  headerMega.style.setProperty('visibility', visibility, 'important');
}

megaMenuDropdown.addEventListener('mouseenter', () => {
  showHide(1, 'translateY(-0px)', 'visible');
});

megaMenuDropdown.addEventListener('mouseleave', () => {
  showHide(0, 'translateY(5rem)', 'hidden');
});

headerMega.addEventListener('mouseenter', () => {
  showHide(1, 'translateY(-0px)', 'visible');
});

headerMega.addEventListener('mouseleave', () => {
  showHide(0, 'translateY(5rem)', 'hidden');
});
