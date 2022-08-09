function returnArrayPosition(list, seachedItem) {
    let result = null;

    let lowest = 0;
    let highest = list.length - 1;

    for (let i = 0; i < list.length; i++) {

        let middle = Math.floor((lowest + highest) / 2);

        if (seachedItem === list[i]) {
            result = i;
            break;
        } else if (seachedItem > list[i]) {
            lowest = middle + 1;
        } else if (seachedItem < list[i]) {
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