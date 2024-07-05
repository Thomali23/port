const cyan = document.querySelector('.cyan');
const pink = document.querySelector('.pink');
const orange = document.querySelector('.orange');

cyan.addEventListener('click', (e) =>{
    document.documentElement.style.setProperty('--cal-color', '#87e7de' );
document.documentElement.style.setProperty('--equal-color', '#8ac6cf' );  
});

pink.addEventListener('click', (e) =>{
    document.documentElement.style.setProperty('--cal-color', '#ff95fc' );
document.documentElement.style.setProperty('--equal-color', '#ca76c7' );  
});

orange.addEventListener('click', (e) =>{
    document.documentElement.style.setProperty('--cal-color', '#ff7e40' );
document.documentElement.style.setProperty('--equal-color', '#ca6433' );  
});

