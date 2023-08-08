function getFibonacciRecursiveOneParam(num) {
    if (num < 2) {
        return num;
    }
    return getFibonacciRecursiveOneParam(num - 1) + getFibonacciRecursiveOneParam(num - 2);
}

function execFibo(num) {
    let resultArr = [];
    if (num <= 0) {
        return "The counter must be a positive interger";
    }

    for (let i = 0; i < num ; i++) {
        resultArr.push(getFibonacciRecursiveOneParam(i));
    }
    return resultArr;
}

function showFibonacciRecursiveSequenceOneParam() {
    let counter = prompt("Type a positive interger");
    document.writeln(`Given <strong>${counter}</strong> as a counter, the Fibonacci Rrcursive Sequence result is this: <strong>${execFibo(counter)}</strong>`);
}