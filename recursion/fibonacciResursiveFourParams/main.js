function getFibonacciResursiveFourParams(penultimate, ultimate, counter, resultArr) {
    if (counter <= 0) {
        return "The counter must be a positive interger";
    }
    resultArr.push(penultimate);
    counter--;
    if (counter == 0) {
        return resultArr;
    }

    let aux = penultimate + ultimate;
    penultimate = ultimate;
    ultimate = aux;

    return getFibonacciResursiveFourParams(penultimate, ultimate, counter, resultArr);
}

function showFibonacciRecursiveSequenceFourParams() {
    let penultimate = 0;
    let ultimate = 1;
    let counter = prompt("Type a positive interger");
    resultArr = [];
    document.writeln(`Given <strong>${counter}</strong> as a counter, the Fibonacci Recursive Sequence result is this: <strong>${getFibonacciResursiveFourParams(penultimate, ultimate, counter, resultArr)}</strong>`);
}