function getFibonacciSequenceByLoop(count) {

    let penultimate = 0;
    let ultimate = 1;
    let resultArray = [];

    if (count <= 0) {
        return "The counter must be a positive interger";;
    }

    for (let i = 0; i < count; i++) {

        resultArray.push(penultimate);
        if (i == count - 1) {
            return resultArray;
        }

        let aux = penultimate + ultimate;
        penultimate = ultimate;
        ultimate = aux;
    }
}


function showFibonacciLoopSequence() {
    const counter = prompt("Type a positive interger");
    document.writeln(`Given <strong>${counter}</strong> as a counter, the Fibonacci Loop Sequence result is this: <strong>${getFibonacciSequenceByLoop(counter)}</strong>`);
}