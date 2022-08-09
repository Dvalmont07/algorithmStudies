function mySortArray() {
    let arr = [2, 90, 70, 305, 50, 999, 80, 60, 85, 1, -45, -1];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > arr[i + 1]) {
            let aux = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = aux;
            i = -1;
        }
    }
    return arr;
}

function fromBookSortArray() {
    let arr = [2, 90, 70, 305, 50, 999, 80, 60, 85, 1, -45, -1];
    for (let i = 0; i < arr.length - 1; i++) {
        let isSwap = false;

        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;

                isSwap = true;
            }
        }

        if (!isSwap) {
            break;
        }

    }
    return arr;
}

function showBubbleSorting() {
    document.writeln(mySortArray() + "<br>");
    document.writeln(fromBookSortArray());
}