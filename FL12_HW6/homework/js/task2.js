let a = parseInt(prompt('Enter value a'));
let b = parseInt(prompt('Enter value b'));
let c = parseInt(prompt('Enter value c'));
if (a === '' || b === '' || c === '') {
    alert('input values should be ONLY numbers');
}
if (a === undefined || b === undefined || c === undefined) {
    alert('input values should be ONLY numbers');
}
if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length');
}
if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        console.log('equivalent triangle');
    } else if (a === b && a !== c || b === c && b !== a || c === a && c !== b) {
        console.log('isosceles triangle');
    } else {
        console.log('scalene triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}