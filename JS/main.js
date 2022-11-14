const divWelcomeContainer = document.querySelector('.formulas-welcome-container');
const mainTittle = document.querySelector('h1');
const mainSubTittleOne = document.querySelector('#main-subtittle-one');
const startButton = document.querySelector('#start-button');
const divSelectionContainer = document.querySelector('#software-02');

startButton.addEventListener('click', () => {
    divWelcomeContainer.classList.replace('formulas-welcome-container','inactive');
    divSelectionContainer.classList.replace('inactive', 'formulas-selection-container');
    mainTittle.classList.add('inactive');
    mainSubTittleOne.classList.remove('inactive');
});
buttonResult.addEventListener('click', balanceMoneyFormula)
buttonResult.addEventListener('click', harvEkerFormula)
buttonResult.addEventListener('click', daveRamseyFormula)