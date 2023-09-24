const btnMultiply = document.getElementById('multiply')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const btnResult = document.getElementById('result')
const btnDivide = document.getElementById('divide')
const btnMinus = document.getElementById('minus')
const btnPlus = document.getElementById('plus')

let action

btnPlus.onclick = function () { action = '+' }
btnDivide.onclick = function () { action = '/' }
btnMultiply.onclick = function () { action = '*' }
btnMinus.onclick = function () { action = '-' }

btnResult.onclick = function () {
    calculate(input1, input2, action)
}

function calculate(inp1, inp2, actSend) {

    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)

    return actSend === '/' ? input3.value = num1 / num2
         : actSend === '*' ? input3.value = num1 * num2
         : actSend === '-' ? input3.value = num1 - num2
         :                   input3.value = num1 + num2
}






