/* mutiple operators*/
const App = (() => {
    const display = document.getElementById('display');
    let expression = [];

    const updateDisplay = () => {
        display.textContent= expression.join(' ');
    };

    const handleNumberClick = (e) => {
        const clickedNumber = e.target.textContent;
        expression.push(clickedNumber);
        updateDisplay();
    };

    const handleOperatorClick = (e) => {
        operator = e.target.textContent;
        expression.push(operator);
        updateDisplay();
    };

    const handleEqualClick = () => {
        try {
            const result = evaluateExpression();
            expression = [result];
            updateDisplay();
        } catch (error) {
            display.value = 'Error';
        }
    };

    const evaluateExpression = () => {
        let result = null;
        let currentOperator = null;

        for (const token of expression) {
            if (!isNaN(token)) {
                const num = parseFloat(token);
                if (result === null) {
                    result = num;
                } else {
                    if (currentOperator === '+') {
                        result = calculator.add(result, num);
                    } else if (currentOperator === '-') {
                        result = calculator.sub(result, num);
                    } else if (currentOperator === '*') {
                        result = calculator.pro(result, num);
                    } else if (currentOperator === '/') {
                        result = calculator.div(result, num);
                    }
                }
            } else {
                currentOperator = token;
            }
        }

        return result;
    };

    const handleClearClick = () => {
        expression = [];
        updateDisplay();
    };

    return {
        handleNumberClick,
        handleOperatorClick,
        handleEqualClick,
        handleClearClick,
    };
})();

document.querySelectorAll('.number').forEach(number => {
    number.addEventListener('click', App.handleNumberClick);
});

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
    operator.addEventListener('click', App.handleOperatorClick);
});

document.querySelector('#equals').addEventListener('click', App.handleEqualClick);

const clear = document.querySelector('#clear');
clear.addEventListener('click', App.handleClearClick);