/* dummy text create */
const dummyText = document.getElementById("text");
const dummyTextBtn = document.querySelector(".generate");
const dummyTextForm = document.getElementById("text-form");
const dummyTextAmount = document.getElementById("text-amount");
const dummyTextException = document.getElementById("text-exception");
const exception = dummyTextException.value;

dummyTextBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const amount = parseInt(dummyTextAmount.value);
    
    if (amount < 1) {
        dummyText.innerHTML = `<p class="error">Please enter a valid number</p>`;
    } else {
        dummyText.innerHTML = dummyTextGenerator(amount)
    }
    }
);

/* dummy random text generator */
function dummyTextGenerator(amount) {
    const dummyTextArray = [];
    for (let i = 0; i < amount; i++) {
        dummyTextArray.push(dummyTextParagraph());
    }
    temp = dummyTextArray.join(' ');
    return temp
}

/* dummyTextParagraph function */
function dummyTextParagraph() {
    const dummyTextParagraphArray = [];
    for (let i = 0; i < 5; i++) {
        dummyTextParagraphArray.push(dummyTextSentence());
    }
    return `<p>${dummyTextParagraphArray.join("")}</p>`;
}

/* create dummyTextParagraphArray */
function dummyTextSentence() {
    const dummyTextSentenceArray = [];
    for (let i = 0; i < 10; i++) {
        dummyTextSentenceArray.push(dummyTextWord());
    }
    return `${dummyTextSentenceArray.join(" ")}. `;
}

/* create dummyTextSentenceArray */
function dummyTextWord() {
    const dummyTextWordArray = [];
    for (let i = 0; i < 5; i++) {
        dummyTextWordArray.push(dummyTextChar());
    }
    return dummyTextWordArray.join("").replace(/'a'/g,'');
}

/* create dummyTextLetterArray */
function dummyTextChar() {
    const dummyTextChar = "abcdefghijklmno pqrstuvwxyz";
    return dummyTextChar.charAt(Math.floor(Math.random() * dummyTextChar.length))
}
