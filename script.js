
//DOM Elements
const passwordEl = document.getElementById('password')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')

const randomFunc = {
    lower: getRandomlower,
    upper: getRandomUpper,
    number:getRandomNumber,
    symbol: getRandomSymbol
};

//event click
generateEl.addEventListener('click',() => {
    const length = +lengthEl.Value;
    const hasLower = lowercaseEl.Checked;
    const hasUpper = uppercaseEl.Checked;
    const hasNumber = numbersEl.Checked;
    const hasSymbol = symbolsEl.Checked;



  console.log(hasLower, hasUpper, hasNumber, hasSymbol, length);
})

//passwordd function









//checkbox functions
function getRandomlower(){
return String.fromCharCode(Math.floor(Math.random()* 26) + 97)
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()* 26) + 65)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()* 10) + 48);
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=+<>/,'
    return symbols[Math.floor(Math.random()* symbols.length)]
}


//displays in console log the checkbox functions
console.log(getRandomlower())
console.log(getRandomUpper())
console.log(getRandomNumber())
console.log(getRandomSymbol())
