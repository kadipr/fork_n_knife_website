
const breakfastBtn = document.querySelector('.breakfast-btn');
const soupBtn = document.querySelector('.soup-btn');
const dinnerBtn = document.querySelector('.dinner-btn');
const drinkBtn = document.querySelector('.drink-btn');

const breakfastDiv = document.querySelector('.breakfast');
const soupDiv = document.querySelector('.soups');
const dinnerDiv = document.querySelector('.dinner');
const drinkDiv = document.querySelector('.drink');

breakfastBtn.addEventListener('click', () => {
    breakfastDiv.classList.add('active');
    soupDiv.classList.remove('active');
    dinnerDiv.classList.remove('active');
    drinkDiv.classList.remove('active');
})

soupBtn.addEventListener('click', () => {
    breakfastDiv.classList.remove('active');
    soupDiv.classList.add('active');
    dinnerDiv.classList.remove('active');
    drinkDiv.classList.remove('active');
})

dinnerBtn.addEventListener('click', () => {
    breakfastDiv.classList.remove('active');
    soupDiv.classList.remove('active');
    dinnerDiv.classList.add('active');
    drinkDiv.classList.remove('active');
})

drinkBtn.addEventListener('click', () => {
    breakfastDiv.classList.remove('active');
    soupDiv.classList.remove('active');
    dinnerDiv.classList.remove('active');
    drinkDiv.classList.add('active');
})