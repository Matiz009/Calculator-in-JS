class Calculator {
    constructor(data_Current_Operand, data_Previous_Operand) {
        this.data_Current_Operand = data_Current_Operand;
        this.data_Previous_Operand = data_Previous_Operand;
        this.clear();
    }
    clear() {
        this.data_Current_Operand = "";
        this.data_Previous_Operand = "";
        this.operandButtons = undefined;
    }
}
const numberButtons = document.querySelectorAll("[data-number]");
const operandButtons = document.querySelectorAll("[data-operation]");
const data_Previous_Operand = document.querySelector("[data-previous-operand]");
const data_Current_Operand = document.querySelector("[data-current-operand]");
const equals = document.querySelector("[data-equals]");
const all_Clear = document.querySelector("[data-all-clear]");
const delete_button = document.querySelector("[data-delete]");