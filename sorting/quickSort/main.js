function quickSort(aArray) {

    if (aArray.length < 2) {
        return aArray;
    }
    const random = Math.floor(Math.random() * (aArray.length - 1));
    let pivot = aArray[random];
    let loewrThanPivot = [];
    let higherThanPivot = [];
    for (let i = 0; i < aArray.length; i++) {
        if (aArray[i] < pivot) {
            loewrThanPivot.push(aArray[i]);
        } else if (aArray[i] > pivot) {
            higherThanPivot.push(aArray[i]);
        }
    }
    return quickSort(loewrThanPivot).concat(pivot).concat(quickSort(higherThanPivot));
}

function showQuickSorting() {
    const aArray = [2, 90, 70, 305, 50, 999, 80, 60, 85, 1, -45, -1];
    console.time("concatenation");
    document.writeln(quickSort(aArray) + "<br>");
    console.timeEnd("concatenation");
}