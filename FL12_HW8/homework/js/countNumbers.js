function countNumber() {
    let a = arguments[0].split('');
    let numberArray = {};
    let q = '';
    for (let i = 0; i < a.length; i++) {
        Number(a[i]);
        if (isFinite(a[i])) {
            q += a[i];
        }
    }
    let w = q.split('');
    for (let j = 0; j < w.length; j++) {
        let r = w[j];
        if (numberArray[r] !== undefined) {
            ++numberArray[r];
        } else {
            numberArray[r] = 1;
        }
    }
    return numberArray;
}
countNumber('1122gf1af12fas');