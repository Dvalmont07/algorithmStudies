function quickSort(arr) {

    if (arr.length < 2) {
        return arr
    } else {

        let pivot = arr[0];

        let menoresQuePivot = arr.filter(a => {
            return a < pivot
        });
        let maioresQuePivot = arr.filter(a => {
            return a > pivot
        });
        return quickSort(menoresQuePivot).concat(pivot).concat(quickSort(maioresQuePivot));
    }

}


function showQuickSorting() {
    const arr = [2, 90, 70, 305, 50, 999, 80, 60, 85, 1, -45, -1];
    console.time("concatenation");
    document.writeln(quickSort(arr) + "<br>");
    console.timeEnd("concatenation");

}