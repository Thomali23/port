const toggleButton = document.querySelector('#dark-light');

toggleButton.addEventListener('click', (e) =>{
    const currentMode = document.body.dataset.mode 
    
    if(currentMode === 'light') {
        document.documentElement.style.setProperty('--txt-clr', '#212121' );
        document.documentElement.style.setProperty('--bg-clr', '#d8d8d8');
document.body.dataset.mode = 'dark'
toggleButton.src ="img/moon.png";
e.target.innerHTML = 'light'; 
    }
    
    else if(currentMode === 'dark') {
        document.documentElement.style.setProperty('--txt-clr', '#d8d8d8')
        document.documentElement.style.setProperty('--bg-clr', '#212121')
document.body.dataset.mode = 'light'
toggleButton.src ="img/sun.png";
e.target.innerHTML = 'dark';

    }
});

 