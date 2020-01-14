function convert() {
    let b = [];
    for (let i = 0; i < arguments.length; i++) {
        let a = arguments[i];
        if (typeof a === 'number') {
            a = a.toString();
            b[i] = a;
        } else if (typeof a === 'string') {
            a = Number(a);
            b[i] = a;
        }
    }
    return b;
}


function executeforEach() {
    let a = arguments[0];
    for (let i = 0; i < a.length; i++) {
        let el = a[i];
        arguments[1](el);
    }
}


function mapArray() {
    let a = arguments[0];
    let b = [];
    let j = 0;
    for (let i = 0; i < a.length; i++) {
        let el = a[i];
        if (typeof a[i] === 'string') {
            a[i] = Number(a[i]);
            if (isFinite(a[i])) {
                el = a[i];
                b[j] = arguments[1](el);
                j++;
            }
        } else {
            b[j] = arguments[1](el);
            j++;
        }
    }
    return b;
}


function filterArray() {
    let a = arguments[0];
    let b = [];
    let j = 0;
    for (let i = 0; i < a.length; i++) {
        let el = a[i];
        if (arguments[1](el)) {
            b[j] = el;
            j++;
        }
    }
    return b;
}


function flipOver() {
    let a = arguments[0].split('');
    let b = '';
    for (let i = a.length - 1; i >= 0; i--) {
        b = b + a[i];
    }
    return b;
}


function makeListFromRange() {
    let a = arguments[0];
    let b = [];
    let j = 0;
    let i = a[0];
    for (i; i < a[1] + 1; i++) {
        b[j] = i;
        j++
    }
    return b;
}


function getArrayOfKeys() {
    let a = [];
    for (let i = 0; i < arguments[0].length; i++) {
        a[i] = arguments[0][i].name;
    }
    return a;
}
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];


function substitute() {
    let a = arguments[0];
    let b = [];
    const z = 30;
    for (let i = 0; i < a.length; i++) {
        let el = a[i];
        if (el > z) {
            b[i] = a[i];
        } else {
            b[i] = '*';
        }
    }
    return b;
}


const date = new Date(2019, 0, 2);
function getPastDay() {
    let a = arguments[0];
    let c = a.getFullYear();
    let d = a.getMonth();
    let e = a.getDate();
    let f = new Date(c, d, e - arguments[1]);
    return f.getDate();
}


function formatDate() {
    let a = arguments[0];
    let yy = a.getFullYear();
    let mm = a.getMonth() + 1;
    let dd = a.getDate();
    let hour = a.getHours();
    const z = 10;
    if (hour < z) {
        hour = '0' + hour;
    }
    let min = a.getMinutes();
    let b = yy + '/' + mm + '/' + dd + ' ' + hour + ':' + min;
    return b;
}