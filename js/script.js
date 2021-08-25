const btnBackground = document.querySelector('#background');
const cardBackground = document.querySelector('.card__background');

const btnFontes = document.querySelector('#font');
const cardFontes = document.querySelector('.card__fonts');

const btnTamanho = document.querySelector('#btn__tamanho');
const cardFontesTamanho = document.querySelector('.card__fonts-tamanho');
const input = document.querySelector('#input');
const btnAlterar = document.querySelector('#submit');
const btnCor = document.querySelector('#btn__cor');
const cardCor = document.querySelector('.card__fonts-cor');

let txt;

const title = document.querySelector('.main__principal');

const corA = document.querySelector('#A');
const corB = document.querySelector('#B');
const corC = document.querySelector('#C');
const corD = document.querySelector('#D');
const corE = document.querySelector('#E');
const corF = document.querySelector('#F');

const cor1 = document.querySelector('#cor1');
const cor2 = document.querySelector('#cor2');
const cor3 = document.querySelector('#cor3');
const cor4 = document.querySelector('#cor4');
const cor5 = document.querySelector('#cor5');
const cor6 = document.querySelector('#cor6');

const btnPeso = document.querySelector('#btn__peso');
const cardsPeso = document.querySelector('.card__fonts-peso');
const btn100 = document.querySelector('#peso100');
const btn600 = document.querySelector('#peso600');

btnBackground.addEventListener('click', () => {
    cardBackground.classList.toggle('none');
})

corA.addEventListener('click', () => {
    document.body.style.backgroundColor = '#E80060';
})

corB.addEventListener('click', () => {
    document.body.style.backgroundColor = '#4a3704';
})

corC.addEventListener('click', () => {
    document.body.style.backgroundColor = '#E1FC1E';
})

corD.addEventListener('click', () => {
    document.body.style.backgroundColor = '#67565F';
})

corE.addEventListener('click', () => {
    document.body.style.backgroundColor = '#931E0E';
})

corF.addEventListener('click', () => {
    document.body.style.backgroundColor = '#2D88E0';
})

btnFontes.addEventListener('click', () => {
    cardFontes.classList.toggle('none');
})

btnTamanho.addEventListener('click', () => {
    cardFontesTamanho.classList.toggle('none');
})

btnAlterar.addEventListener('click', () => {
    txt = input.value;
    title.style.fontSize = `${txt}px`;
})

btnCor.addEventListener('click', () => {
    cardCor.classList.toggle('none');
})

cor1.addEventListener('click', () => {
    title.style.color = '#361322';
})

cor2.addEventListener('click', () => {
    title.style.color = '#0b9d15';
})

cor3.addEventListener('click', () => {
    title.style.color = '#2d0535';
})

cor4.addEventListener('click', () => {
    title.style.color = '#bf4b4b';
})

cor5.addEventListener('click', () => {
    title.style.color = '#95bac3';
})

cor6.addEventListener('click', () => {
    title.style.color = '#000000';
})

btnPeso.addEventListener('click', () => {
    cardsPeso.classList.toggle('none');
})

btn100.addEventListener('click', () => {
    title.style.fontWeight = '100';
})

btn600.addEventListener('click', () => {
    title.style.fontWeight = '600';
})