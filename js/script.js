const words = [
    "aY1JkAq",
    "FqJke67",
    "lG000s2",
    "ArvaaHs",
    "mArIth9",
    "7uSdf22",
    "10VasY1",
    "sOq67Vq",
    "2GaYWb1",
    "jTsQMAa",
    "kVarHar",
    "2ghJk81",
    "2gtlo1j",
    "Tik1u3i",
    "s0jqTxv",
    "Dft12io",
    "fteq9hr",
    "wuia23T",
    "Yucvw20",
]

let popup = document.getElementById("popup");
let wrong_popup = document.getElementById("wrong-popup");
const validate = document.querySelector(".results .check");
const captcha = document.querySelector(".captcha p");
const btn = document.querySelector(".reset");
const enter = document.getElementById("userInput");

function generate(){
    let randomWord = words[Math.floor(Math.random() * words.length)]
    console.log(randomWord);
    captcha.innerHTML = randomWord;
}

generate();


btn.addEventListener("click",() => {
    generate();
    // console.log(enter.value);
    enter.value = "";
})

function checkCaptcha(){
    if(enter.value != ""){
        if(enter.value === captcha.innerHTML){
            openPopup();
        }
        else{
            openWrongPopup();
        }
    }
    else{
        openWrongPopup();
    }
    // console.log(enter.value)
}

function openWrongPopup(){
    wrong_popup.classList.add("open-wrong-popup");
}

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}

function wrongClosePopup(){
    wrong_popup.classList.remove("open-wrong-popup");
}



console.log(enter);



// generate();



