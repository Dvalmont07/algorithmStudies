function sumArrayByLoop(aArray) {
    let result = 0;
    for (const x of aArray) {
        result += x;
    }
    return result;
}

function sumArrayRecursively(aArray) {
    if (aArray.length === 0) {
        return 0;
    }
    else {
        return aArray.pop() + sumArrayRecursively(aArray);
    }
}

function showTotal() {
    const aArray = [2, 4, 6];
    document.writeln(`BaseArray: ${aArray} <br>`);
    document.writeln(`Expexted result: 12 <br>`);
    document.writeln("sumArrayByLoop: " + sumArrayByLoop(aArray) + "<br>");
    document.writeln("sumArrayRecursively: " + sumArrayRecursively(aArray) + "<br>");
}

//result 12