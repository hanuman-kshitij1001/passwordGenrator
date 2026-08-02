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
const generateBtn = document.querySelector(".password-generate-btn");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '!@#$%^&*()_+{}[]:;<>,.?/~`-=';

let password = "";
let passwordLength = 10;  
//  Yaha Esse haam Starting me 10 ka length set kar rahe hai
// Aur by default ek check box clecked hoga, jisse ki password generate ho sake to uske liye 
let checkCount = 0;

// str stength circle color to greey 

//Yaha haam hadle slider function bana rahe hai jisse ki user password ka length set kar sake
// Jo Bhi Slider ki value Hongi Uske According ye Password ki Length ko set kar kar denga theeki
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.textContent = passwordLength;
    // or kuch karu kya ?????

    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ((passwordLength - min) * 100 / (max - min)) + "% 100%";
    
}

// Yaha pe jo Hamne ek Color wali ball bana rakhi hai jo ahmre Pass gernarate hone ke bd hame uska color me strength dikhayega uske liye ye function hai
function setIndicator(color){
//  eske Do kaam hai pahela color set karna strength ka aur dusra shadow set karna strength ki 
    indicator.style.backgroundColor = color;
    
    //shaodow set karne ke liye

    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}


// get random integer function Hai ye 
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Yaha Hame 0 to 9 ke bich me random number generate karna hai to mai yaha pe getRandomInteger function ka use karunga
function generateRandomNumber() {
    return getRandomInteger(0, 9);
}


// for lower case 
function generateLowerLetters() {
    // Mujhe yaha chote a se z tak ki value chahiye to mai yaha pe char code ka use karunga
    // a = 97 , se z = 122 ye ascii value hai to mai yaha pe 97 se 122 ke bich me random number generate karunga aur uske corresponding character ko return kar dunga
    // return getRandomInteger(97, 123);
    // Ab ek Number ko Character me convert karne ke liye mai String.fromCharCode() ka use karunga
    // Ye methode hai 
    // String.fromCharCode(getRandomInteger(97, 123));
    return String.fromCharCode(getRandomInteger(97, 123));
}


// Shirf number hi kyu genrate kare esme upper case bhi toh hai uske lliye ek funcion banna padega 
function generateUpperLetters() {
    // return getRandomInteger(65, 91);
    // String.fromCharCode(getRandomInteger(65, 91));
    return String.fromCharCode(getRandomInteger(65, 91));
}

function generateRandomNumber() {
    return String(getRandomInteger(0, 10));
}

// Yaha pe haam symbol generate karne ke liye function bana rahe hai jisse ki user select kar sake ki usse kis type ka password chahiye sare check box ke liye ye function hai
function genrateSymbols() {
    // Mujhe to Pata hi nahi hai ki kon sa symbol ka kya ascci hai 
    // Main ek string bana leta hun 
    // Sare chracters ko ek string me store kar leta hun aur usme se random character ko select kar leta hun
    // Haam Ek Random Number genrate karte hai String ke length ke hisab se aur uske corresponding character ko return kar dete hai
    // const randomNum = getRandomInteger(0, symbols.length);
    // return symbols.charAt(randomNum);
    const randomNum = getRandomInteger(0, symbols.length);
    return symbols.charAt(randomNum);

}


// Arey ye jo color hai button ka jo red y green ho raha hia ye bhi toh kissi logic se ho raha honga na eske liye bhi toh function banani padegi jisse ki hame pata chale ki password strong hai ya weak hai
function calcStrength() {
    // kuch honge hai jisse haam kissi password ko strong ya weak bol sakte hai
    // koi standard hai jisse haam ye decide kar sakte hai ki password strong hai ya weak hai wo haar programmer ke liye alag alag hota hai 
    //  sabko haam pahele hi man lenge false hai 
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    // agr maan lo ki user ne upper case select kiya hai to hasUpper true ho jayega 
    // mtlb agr uppercase check hai to usse marked kar do same for every one 

    if(uppercaseCheck.checked) hasUpper = true;
    //yaha pe jo .checked hai wo ek property hai jo ki check box ke liye hoti hai agr check box checked hoga to ye true hoga aur agr unchecked hoga to ye false hoga samjah na 
    if(lowercaseCheck.checked) hasLower = true;
    if(numbersCheck.checked) hasNum = true;
    if(symbolsCheck.checked) hasSym = true;

    //  koi standr nahi hai ess rule yad rakha tumh khud ka bhi bana sakte ho 
    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8){
        setIndicator("#0f0");
    }   
    else if((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6){
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
}

}

// Ye haam jo password bana rahe hai usse copy karne ke liye ye function hai
async function copy(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e){
        copyMsg.innerText = "Failed to copy";
    }
    // eske upper ek time bhi lagana hai kuch samjhaye baad ye invisible ho jayega
    copyMsg.classList.add("active"); 
    // Esse span invisible ho jayega aur 2 second ke baad ye invisible ho jayega
    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000);
    //kya mere yaha active likhne se visible ho jata hai nahi Toh kya hota hai 
    //agr apne class active create ki hongi toh add ho jati hai aur agr nahi create ki hongi toh add nahi hoti hai css me 
    
}

function shufflePassword(array){
    // fisher yetes method
   for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
   }
   let str = "";
   array.forEach((el) => (str += el));
   return str;
}

// check box ke upper listener lagana hai jisse ki user select kar sake ki usse kis type ka password chahiye sare check box ke liye ye function hai
function handleCheckBoxChange(){
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if(checkbox.checked) checkCount++;
    });

    // special case handle for password length
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

}

allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
    })

inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
})

// Chalo ab Ek Function Bante hia agr Copy me value toh copy kar paoge warna nahi 
copyBtn.addEventListener('click', () => {
    if(passwordDisplay.value){
        copy();
    }
})

// EventListerner for Genrate Password 

generateBtn.addEventListener('click', () => {
    //  yaha pe haam check karenge ki user ne koi check box select kiya hai ya nahi 
    if(checkCount <= 0) return;
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
    // naye password find out karne wale hai yaha pe 
    // 1- reovme old password
    password = "";

    // let put the stuuf mention for the check box
    // if(uppercaseCheck.checked){
    //     password +=generateUpperLetters();
    // }
    // if(lowercaseCheck.checked){
    //     password +=generateLowerLetters();
    // }
    // if(numbersCheck.checked){
    //     password +=generateRandomNumber();
    // }
    // if(symbolsCheck.checked){
    //     password +=genrateSymbols();
    // }
    // Esse esse nahi karenge Array se karenge
    let funcArr = [];
    if(uppercaseCheck.checked) funcArr.push(generateUpperLetters);
    if(lowercaseCheck.checked) funcArr.push(generateLowerLetters);
    if(numbersCheck.checked) funcArr.push(generateRandomNumber);
    if(symbolsCheck.checked) funcArr.push(genrateSymbols);

    for(let i=0; i<funcArr.length; i++){
        password += funcArr[i]();  
    }
    
    // remaing addding random letters
    // for(let i=0; i<passwordLength-funcArr.length; i++){
    //     let randIndex = getRandomInteger(0, funcArr.length);
    //     password += funcArr[randIndex]();
    // }
    
    for(let i=0; i<passwordLength-funcArr.length; i++){
        let randIndex = getRandomInteger(0, funcArr.length);
       password += funcArr[randIndex]();
    }

    // suffle the password
    password = shufflePassword(Array.from(password));

    // show in UI
    passwordDisplay.value = password;

    //calculate strength
    calcStrength();

});
handleSlider(); 


