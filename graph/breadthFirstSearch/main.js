function breadthFirstSearch(dictionary, searchedItem) {
    /**Searching the first salesperson in the queue */
    let queue = [];
    queue = queue.concat(dictionary['you']);
    const verifiedPeople = [];

    if (dictionary) {
        while (queue.length > 0) {
            let person = queue.shift();
            if (verifiedPeople.indexOf(person) == -1) {
                if (isSalesPerson(person)) {
                    return `${person} is a salesperson`;
                    // break;
                } else {
                    verifiedPeople.push(person);
                    queue = queue.concat(dictionary[person]);
                }
            }
        }
        return emptyDictionayMessage();
    } else {
        return emptyDictionayMessage();
    }

    function emptyDictionayMessage() {
        return `there's no salesperson in the list`;
    }

    function isSalesPerson(person) {
        return person.endsWith(searchedItem);
    }

}



function showGraphBreadthFirstSearch() {
    const searchedItem = 's';
    const nodesList = [];
    nodesList['you'] = ['alice', 'bob', 'claire'];
    nodesList['bob'] = ['anuj', 'peggy'];
    nodesList['alice'] = ['peggy'];
    nodesList['claire'] = ['thom', 'jonny-s'];
    nodesList['anuj'] = [];
    nodesList['peggy'] = [];
    nodesList['thom'] = [];
    nodesList['jonny-s'] = [];
    
    document.write(`${breadthFirstSearch(nodesList, searchedItem)}`);
    //Expected result: thom is a salesPerson
}