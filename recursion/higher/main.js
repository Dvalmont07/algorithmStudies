function findHigherArrayNumberByLoop(aArray) {
    let higher = 0
    for (let i = 0; i < aArray.length; i++) {
        for (let j = i; j < aArray.length; j++) {
            if (aArray[j] > higher) {
                higher = aArray[j];
                break;
            }
        }
    }
    return higher;
}

function findHigherArrayNumberRecursively(aArray) {
    //TODO recursive case
    let higher = 0    
    return higher;
}

function showHigher() {
    const aArray = [1, 4, 12, 10, 101, 2, 14, 11, 16, 6, 100];
    document.writeln(`BaseArray: ${aArray} <br>`);
    document.writeln(`Expexted result: 101 <br>`);
    document.writeln("sumArrayByLoop: " + findHigherArrayNumberByLoop(aArray) + "<br>");
    //document.writeln("sumArrayRecursively" + findHigherArrayNumberRecursively(aArray) + "<br>");
}

//result 101