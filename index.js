class Calculator {
    constructor(data_Previous_Operand, data_Current_Operand) {
        this.data_Current_Operand = data_Current_Operand;
        this.data_Previous_Operand = data_Previous_Operand;
        this.clear();
    }
    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }

    delete() {}

    appendNumber(number) {
        this.currentOperand = number;
    }
    chooseOperation(operation) {}
    compute() {}
    updateDisplay() {
        this.data_Current_Operand.innerText = this.currentOperand;
    }
}
const numberButtons = document.querySelectorAll("[data-number]");
const operandButtons = document.querySelectorAll("[data-operation]");
const data_Previous_Operand = document.querySelector("[data-previous-operand]");
const data_Current_Operand = document.querySelector("[data-current-operand]");
const equals = document.querySelector("[data-equals]");
const all_Clear = document.querySelector("[data-all-clear]");
const delete_button = document.querySelector("[data-delete]");

const calculator = new Calculator(data_Previous_Operand, data_Current_Operand);
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});