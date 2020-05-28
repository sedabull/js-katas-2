//ALL FUNCTIONS VALID ONLY FOR POSITIVE INTEGERS!

function add(a, b) {
    return a + b;
}//end add

function subtract(a, b) {
    return add(a, -b);
}//end subtract

function multiply(a, b) {
    return b === 0 ? 0 : add(a, multiply(a, subtract(b, 1)));
}//end multiply

function power(x, n) {
    return n === 0 ? 1 : multiply(x, power(x, subtract(n, 1)));
}//end power

function factorial(n) {
    return n === 1 ? n : multiply(n, factorial(subtract(n, 1)));
}//end factorial

function fibonacci(n) {
    return n === 1 || n === 2 ? subtract(n, 1) : add(fibonacci(subtract(n, 1)), fibonacci(subtract(n, 2)));
}//end fibonacci