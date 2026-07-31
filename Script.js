const inputSlider = document.querySelector("[data-length-slider]");
const lengthDisplay = document.querySelector("[data-length-number]");
const passwordDisplay = document.querySelector("[data-password-display]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copy-msg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");

let password = "";
let passwordLength = 10;  
//  Yaha Esse haam Starting me 10 ka length set kar rahe hai
// Aur by default ek check box clecked hoga, jisse ki password generate ho sake to uske liye 
let checkCount = 1;

// str stength circle color to greey 





// Ye haam jo password bana rahe hai usse copy karne ke liye ye function hai
function copy(){

}



//Yaha haam hadle slider function bana rahe hai jisse ki user password ka length set kar sake
function handleSlider(){


}



// Ye haam password generate karne ke liye function bana rahe hai
function generatePassword(){


}



// Yaha pe jo Hamne ek Color wali ball bana rakhi hai jo ahmre Pass gernarate hone ke bd hame uska color me strength dikhayega uske liye ye function hai
function setIndicator(color){

}



// yaha haam check box ke liye function bana rahe hai jisse ki user select kar sake ki usse kis type ka password chahiye sare check box ke liye ye function hai
function handleSlider(){
    lengthDisplay.textContent = inputSlider.value;
}



// get random integer function Hai ye 
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Shirf number hi kyu genrate kare esme upper case bhi toh hai uske lliye ek funcion banna padega 
function generateUpperLetters() {

}

// for lower case 
function generateLowerLetters() {

}


function genrateSymbols() {

}


// Arey ye jo color hai button ka jo red y green ho raha hia ye bhi toh kissi logic se ho raha honga na eske liye bhi toh function banani padegi jisse ki hame pata chale ki password strong hai ya weak hai
function calcStrength() {


}