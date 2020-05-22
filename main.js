//ALL FUNCTIONS VALID ONLY FOR POSITIVE INTEGERS!

function add(a, b) {
    return a + b;
}//end add

function subtract(a, b) {
    return add(a, -b);
}//end subtract

function multiply(a, b) {
    if(a === 0 || b === 0) {
        return 0;
    } else {
        return add(a, multiply(a, subtract(b, 1)));
    }//end if/else
}//end multiply

function power(x, n) {
    if(n === 0) {
        return 1;
    } else {
        return multiply(x, power(x, subtract(n, 1)));
    }//end if/else
}//end power

function factorial(n) {
    if(n === 1) {
        return n;
    } else {
        return multiply(n, factorial(subtract(n, 1)));
    }//end if/else
}//end factorial

function fibonacci(n) {
    if(n === 1 || n === 2) {
        return subtract(n, 1);
    } else {
        return add(fibonacci(subtract(n, 1)), fibonacci(subtract(n, 2)));
    }//end if/else
}//end fibonacci