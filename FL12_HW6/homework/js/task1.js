// Your code goes here
let a = prompt('Enter value a');
let b = prompt('Enter value b');
let c = prompt('Enter value c');
if (isNaN(a) === true || isNaN(b) === true || isNaN(c) === true) {
    console.log('Invalid input data');
} else {
    let d = b * b - 4 * a * c;
    if (d < 0) {
        console.log('no solution');
    } else if (d === 0) {
        let x = -b / 2 * a;
        console.log('x=' + x);
    } else {
        let x1 = parseInt(-b + Math.sqrt(d) / 2 * a);
        let x2 = parseInt(-b - Math.sqrt(d) / 2 * a);
        console.log('x1=' + x1 + ' and x2=' + x2);
    }
}