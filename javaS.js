const sinal = document.getElementById('sinal');
const buttons = document.getElementById('buttons')
let colorIndex = 0;
let intervalID = null;

const trafficLight = ( Event ) => {
    paraOauto();
    turnOn[Event.target.id]();
   
}

const nextIndex = () => {
   colorIndex = colorIndex < 2 ? ++colorIndex : 0;
}

const changeColor = () => {
    const colors = ['vermelho','amarelo','verde']
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const paraOauto = () => {
    clearInterval ( intervalID );
}

const turnOn = {
    'vermelho':     () => sinal.src = './img/vermelho.png',
    'amarelo':      () => sinal.src = './img/amarelo.png',
    'verde':        () => sinal.src = './img/verde.png',
    'auto':         () => intervalID = setInterval( changeColor, 1000)    
}

buttons.addEventListener('click', trafficLight);