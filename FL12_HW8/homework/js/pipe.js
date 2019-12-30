function addOne(x) {
    return x + 1;
}
function pipe() {
    if (isFinite(arguments[0])) {
        var allArgument = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            if (typeof (arguments[i]) === 'function') {
                var argForNextFunc = addOne(allArgument);
            }
            allArgument = argForNextFunc;
        }
    }
    return allArgument;
}
pipe(2, addOne, addOne);