function getLowerNumber(arr) {
    let lower = arr[0];
    lowerIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < lower) {
            lower = arr[i];
            lowerIndex = i;
        }
    }
    return lowerIndex;
}

function sortBySelection(arr) {

    let newArr = [];
    const fixedLength = arr.length;
    for (let i = 0; i < fixedLength; i++) {
        let lower = getLowerNumber(arr);
        newArr.push(arr.splice(lower, 1));
    }
    return newArr;

}

function showSortBySelection() {
    const arr = [2, 90, 70, 305, 50, 999, 80, 60, 85, 1, -45, -1,];
    console.time("concatenation");
    document.writeln(sortBySelection(arr) + "<br>");
    console.timeEnd("concatenation");
}