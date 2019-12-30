function makeNumber() {
    let a = arguments[0].split('');
    let q = '';
    for (let i = 0; i < a.length; i++) {
        Number(a[i]);
        if (isFinite(a[i])) {
            q += a[i];
        }
    }
    return q;
}
makeNumber('651gsd143fd21');