function returnArrayPosition(list, searchedItem) {

    let lowest = 0;
    let highest = list.length - 1;

    for (let i = 0; i < list.length; i++) {

        let middle = Math.floor((lowest + highest) / 2);
        let guess = list[middle];

        if (searchedItem === guess) {
            return middle;

        } else if (searchedItem > guess) {
            lowest = middle + 1;
        } else {
            highest = middle - 1;
        }
    }
    return null;
}

// function returnArrayPosition(list, searchedItem, highest, lowest) {

//     let middle = Math.floor((highest + lowest) / 2);
//     let guess = list[middle];

//     if (searchedItem === guess) {
//         return middle;
//     } else if (searchedItem > guess) {
//         lowest = middle + 1;
//     } else {
//         highest = middle - 1;
//     }

//     return returnArrayPosition(list, searchedItem, highest, lowest);

// }

function showBinarySearch() {
    const searchedItem = 70;
    const list = [1, 10, 21, 41, 52, 65, 70, 80, 96, 100];
    const highest = list.length - 1;
    const lowest = 0;
    document.write(`Array position of ${searchedItem}: ${returnArrayPosition(list, searchedItem, highest, lowest)}`);
}
showBinarySearch()
//result = 7