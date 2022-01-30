const formSection = document.querySelector(".form");
const form = document.getElementById("booking-form");
let firstNameValid = false;
let secondNameValid = false;
let emailValid = false;
let dateValid = false;
let timeValid = false;
let numberValid = false;

const firstName = document.getElementById("name");
const secondName = document.getElementById("second-name");
const email = document.getElementById("email");
const date = document.getElementById("date");
const time = document.getElementById("time");
const number = document.getElementById("number");


function firstNameValidation() {
    if (firstName.value === "") return false;
    return true;
}

function secondNameValidation() {
    if (secondName.value === "") return false;
    return true;
}

function emailValidation() {
    if (email.value === "") return false;
    return true;
}

function dateValidation() {
    if (date.value === "") return false;

    let dateValue = date.value;

    dateValue = Date.parse(dateValue);

    let now = new Date();
    now = Date.parse(now);

    if (dateValue <= now) alert("Proszę podać inną datę");
    return true;
}

function timeValidation() {
    if (time.value === "") return false;

    let timeValue = time.value;
    let hours = timeValue.split(':')[0];
    if (hours < 10 || hours >= 22) {
        alert("Proszę wybrać godzinę od 10 do 22");
    } 

    return true;
}

function numberValidation() {
    if (number.value === "") return false;

    if (number.value <= 0 || number.value >= 7) {
        alert("Możliwość rezerwacji stolików maksymalnie dla 6 osób");
    }

    return true;
}

function formValidation(e) {
    e.preventDefault();

    firstNameValid = firstNameValidation();
    secondNameValid = secondNameValidation();
    emailValid = emailValidation();
    dateValid = dateValidation();
    timeValid = timeValidation();
    numberValid = numberValidation();
    
    if (!firstNameValid || !secondNameValid || !emailValid ||
            !dateValid || !timeValid || !numberValid) {
        alert('Proszę podać dane');
        return;
    }

    form.textContent = "";

    const p = document.createElement("p");
    p.textContent = "Zarezerwowano pomyślnie";
    formSection.appendChild(p);
}

form.addEventListener("submit", formValidation);