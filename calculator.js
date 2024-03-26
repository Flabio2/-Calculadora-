const display = document.querySelector('.display');
const buttons = Array.from(document.querySelectorAll('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        display.value += e.target.innerText;
    })
});

// Agrega más funcionalidades según sea necesario
