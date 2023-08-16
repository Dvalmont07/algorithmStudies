function findHigherArrayNumberByLoop(aArray) {
    let higher = 0
    for (let i = 0; i < aArray.length; i++) {
        if (aArray[i] > higher) {
            higher = aArray[i];
        }
    }
    return higher;
}

function findHigherArrayNumberRecursively(aArray, higher) {
    if (aArray.length === 0) {
        return higher;
    }
    const arrayTop = aArray.pop();
    if (arrayTop > higher) {
        higher = arrayTop;
    }
    return findHigherArrayNumberRecursively(aArray, higher);
}

function showHigher() {
    const aArray = [1, 4, 12, 10, 101, 202, 140, 11, 16, 6, 100];
    document.writeln(`BaseArray: ${aArray} <br>`);
    document.writeln(`Expexted result: 202 <br>`);
    document.writeln("sumArrayByLoop: " + findHigherArrayNumberByLoop(aArray) + "<br>");
    document.writeln("sumArrayRecursively: " + findHigherArrayNumberRecursively(aArray, 0) + "<br>");
}

//result 101