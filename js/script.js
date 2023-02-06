const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const timezoneTitle = document.querySelector('.timezone');
var timeZoneSet = "America/Sao_Paulo";

const getTime = () => {
    //const date = new Date();
    const date = setTimezone(timeZoneSet);
    
    // Retorna um objeto com os valores da data
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };
}

setInterval(() => {
    const { seconds, minutes, hours } = getTime();
    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;
    hourHand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`;

}, 1000);

// Mudar TimeZone

function setTimezone(tmz) {
    const date = new Date();
    return new Date(date.toLocaleString("en-US", {timeZone: tmz}));
}

function chageTimeZone({ target }) {
    timezoneTitle.innerText = target.innerText;
    timeZoneSet = target.value;
}

// Gerar bastões que separam as horas

const clock = document.querySelector('.clock');
const numbers = document.querySelectorAll('.number');

function genereteSticks() {
    var deg = 6;
    numbers.forEach((number) => {
        for (let i = 0; i < 4; i++) {
            const newStick = createStick(deg); 
            insertAfter(newStick, number);
            deg+= 6;
        }
        deg+=6;
    });
}

function createStick(position) {
    const stick = document.createElement("div");
    stick.innerHTML = '|';
    stick.classList.add('stick');
    stick.style.transform = `rotate(${position}deg)`;

    return stick;
}

function insertAfter(newElement, reference) {
    reference.parentNode.insertBefore(newElement, reference.nextSibling);
}

genereteSticks();
