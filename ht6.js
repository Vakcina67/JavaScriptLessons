function funcPlus(a, b) {
    return a + b;
}
function funcMinus(a, b) {
    return a - b;
}
function funcMulti(a, b) {
    return a * b;
}
function funcDiv(a, b) {
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case 'plus':
            return funcPlus(arg1, arg2);
        case 'minus':
            return funcMinus(arg1, arg2);
        case 'multiplication':
            return funcMulti(arg1, arg2);
        case 'division':
            return funcDiv(arg1, arg2);
    }
}
console.log(mathOperation(17, 5, 'minus'));