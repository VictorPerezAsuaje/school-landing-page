const hamMenu = document.getElementsByClassName('burger__menu')[0];
const menuItems = document.querySelectorAll('.menu__item');
let menuOpened = false;

hamMenu.addEventListener('click', ()=>{
    if(!menuOpened){
        hamMenu.classList.add('active');
        menuItems.forEach(item => item.classList.add('active'));
        menuOpened = true;
    }
    else{
        hamMenu.classList.remove('active');
        menuItems.forEach(element => {
            element.classList.remove('active');
        });
        menuOpened = false;
    }
});