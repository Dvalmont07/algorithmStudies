function getFibonacciSequenceByLoop(count) {

    let penultimate = 0;
    let last = 1;
    let resultArray = [];

    if (count == 0) {
        return [penultimate];
    }

    for (let i = 0; i < count; i++) {
        resultArray.push(penultimate);
        if (i == count - 1) {
            return resultArray;
        }
        let aux = penultimate + last;
        penultimate = last;
        last = aux;
    }
}


function showFibonacciSequence() {
    const counter = 7;
    document.writeln(`Given <strong>${counter}</strong> as a couter, the sequence result is this: <strong>${getFibonacciSequenceByLoop(counter)}</strong>`);

}