const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

const toggleBtn = document.querySelector('#dark_light')

toggleBtn.addEventListener('click', (e) =>{
    const currentMode = document.body.dataset.mode 
    
    if(currentMode === 'light') {
        document.documentElement.style.setProperty('--txt-clr', '#212121' );
        document.documentElement.style.setProperty('--bg-clr', '#ffffff');
document.body.dataset.mode = 'dark'
toggleBtn.src ="img/moon.png";
e.target.innerHTML = 'light'; 
    }
    
    else if(currentMode === 'dark') {
        document.documentElement.style.setProperty('--txt-clr', '#ffffff')
        document.documentElement.style.setProperty('--bg-clr', '#212121')
document.body.dataset.mode = 'light'
toggleBtn.src ="img/sun.png";
e.target.innerHTML = 'dark';

    }
});