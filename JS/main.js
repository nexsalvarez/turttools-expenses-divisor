const divWelcomeContainer = document.querySelector('.formulas-welcome-container');
const mainTittle = document.querySelector('h1');
const mainSubTittleOne = document.querySelector('#main-subtittle-one');
const mainSubTittleTwo = document.querySelector('#main-subtittle-two');
const startButton = document.querySelector('#start-button');
const divSelectionContainer = document.querySelector('#software-02');
const typeBestMoney = document.querySelector('#type-one');
const typeHarvEker = document.querySelector('#type-two');
const typeDaveRamsey = document.querySelector('#type-three');
const divQuestionContainer = document.querySelector('#software-03');

startButton.addEventListener('click', () => {
    divWelcomeContainer.classList.replace('formulas-welcome-container','inactive');
    divSelectionContainer.classList.replace('inactive', 'formulas-selection-container');
    mainTittle.classList.add('inactive');
    mainSubTittleOne.classList.remove('inactive');
});
typeBestMoney.addEventListener('click', () => {
    divSelectionContainer.classList.replace('formulas-selection-container','inactive');
    divQuestionContainer.classList.replace('inactive', 'formulas-question-container');
    mainSubTittleOne.classList.add('inactive');
    mainSubTittleTwo.classList.remove('inactive');
    formulaSelected('BalanceMoney');
});
typeHarvEker.addEventListener('click', () => {
    divSelectionContainer.classList.replace('formulas-selection-container','inactive');
    divQuestionContainer.classList.replace('inactive', 'formulas-question-container');
    mainSubTittleOne.classList.add('inactive');
    mainSubTittleTwo.classList.remove('inactive');
    formulaSelected('HarvEker');
});
typeDaveRamsey.addEventListener('click', () => {
    divSelectionContainer.classList.replace('formulas-selection-container','inactive');
    divQuestionContainer.classList.replace('inactive', 'formulas-question-container');
    mainSubTittleOne.classList.add('inactive');
    mainSubTittleTwo.classList.remove('inactive');
});

function formulaSelected (formula) {
    if (formula == 'BalanceMoney') {
        return balanceMoneyFormula();
    } else if (formula == 'HarvEker') {
        return harvEkerFormula();
    } else {
        return daveRamseyFormula();
    }
}

// buttonResult.addEventListener('click', balanceMoneyFormula)