function returnArrayPosition(list, seachedItem) {
    let result = null;

    let lowest = 0;
    let highest = list.length - 1;

    for (let i = 0; i < list.length; i++) {

        let middle = Math.floor((lowest + highest) / 2);
        let guess = list[middle];

        if (seachedItem === guess) {
            result = middle;
            break;
        } else if (seachedItem > guess) {
            lowest = middle + 1;
        } else if (seachedItem < guess) {
            highest = middle - 1;
        }
    }
    return result;
}

function showBinarySearch() {
    const seachedItem = 80;
    const list = [1, 10, 21, 41, 52, 65, 70, 80, 96, 100];
    document.write(`Array position of ${seachedItem}: ${returnArrayPosition(list, seachedItem)}`);
}
//result = 7