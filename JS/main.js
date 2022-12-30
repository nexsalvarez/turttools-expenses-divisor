const divWelcomeContainer = document.querySelector('.formulas-welcome-container');
const mainTittle = document.querySelector('h1');
const mainSubTittleOne = document.querySelector('#main-subtittle-one');
const mainSubTittleTwo = document.querySelector('#main-subtittle-two');
const mainSubTittleThree = document.querySelector('#main-subtittle-three');
const startButton = document.querySelector('#start-button');
const divSelectionContainer = document.querySelector('#software-02');
const typeBestMoney = document.querySelector('#type-one');
const typeHarvEker = document.querySelector('#type-two');
const typeDaveRamsey = document.querySelector('#type-three');
const divQuestionContainer = document.querySelector('#software-03');
const buttonResult = document.querySelector('#button-result');
const divResultContainer = document.querySelector('#software-04');
const divResultBestMoney = document.querySelector('#formula-result-01');
const divResultHarvEker = document.querySelector('#formula-result-02');
const divResultDaveRamsey = document.querySelector('#formula-result-03');
const restartButton = document.querySelector('#restart-button');

let methodSelected = 0;

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
    selectedFormula('BalanceMoney');
});
typeHarvEker.addEventListener('click', () => {
    divSelectionContainer.classList.replace('formulas-selection-container','inactive');
    divQuestionContainer.classList.replace('inactive', 'formulas-question-container');
    mainSubTittleOne.classList.add('inactive');
    mainSubTittleTwo.classList.remove('inactive');
    selectedFormula('HarvEker');
});
typeDaveRamsey.addEventListener('click', () => {
    divSelectionContainer.classList.replace('formulas-selection-container','inactive');
    divQuestionContainer.classList.replace('inactive', 'formulas-question-container');
    mainSubTittleOne.classList.add('inactive');
    mainSubTittleTwo.classList.remove('inactive');
    selectedFormula('DaveRamsey');
});

function selectedFormula(formula) {
    if (formula === 'BalanceMoney') {
        methodSelected = 1;
    } else if (formula === 'HarvEker') {
        methodSelected = 2;
    } else if (formula === 'DaveRamsey') {
        methodSelected = 3;
    }
}
userNum.addEventListener('keydown', (e) => {
    if (e.key == "Enter" ||e.which == 13) {
        e.preventDefault();
        return false;
    }
})

buttonResult.addEventListener('click', () => {
    if (Number(userNum.value) > 0) {
        divQuestionContainer.classList.replace('formulas-question-container','inactive');
        divResultContainer.classList.replace('inactive', 'formulas-result-container');
        mainSubTittleTwo.classList.add('inactive');
        mainSubTittleThree.classList.remove('inactive');
        if (methodSelected === 1) {
            divResultBestMoney.classList.remove('inactive');
            return console.log(balanceMoneyFormula());
        } else if (methodSelected === 2) {
            divResultHarvEker.classList.remove('inactive');
            return console.log(harvEkerFormula());
        } else if (methodSelected === 3) {
            divResultDaveRamsey.classList.remove('inactive');
            return console.log(daveRamseyFormula());
        } else {
            console.error('Elige un método')
        }
    } else {
        window.alert('Necesitas colocar un número mayor a 0')
    }
});

restartButton.addEventListener('click', () => {
    divResultContainer.classList.replace('formulas-result-container','inactive');
    divSelectionContainer.classList.replace('inactive', 'formulas-selection-container');
    mainSubTittleThree.classList.add('inactive');
    mainSubTittleOne.classList.remove('inactive');
    divResultBestMoney.classList.add('inactive');
    divResultHarvEker.classList.add('inactive');
    divResultDaveRamsey.classList.add('inactive');
    });