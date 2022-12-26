class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
}

clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}
delete() {

}
appendNumber(number) {

}
chooseOperation(operation) {

}

compute() {

}

updateDisplay() {

}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const deleteButton = document.querySelectorAll('[data-delete]')
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]')
const currentOperandTextElement = document.querySelectorAll('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
    })
})