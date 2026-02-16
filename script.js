const menuBtn = document.querySelector('.menubtn');
const menuNav = document.querySelector('.menunav');

menuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    
    if(this.classList.contains('active')){
        menuNav.style.display = 'grid';
    } else {
        menuNav.style.display = 'none';
    }
});