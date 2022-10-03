function breadthFirstSearch(dictionary, searchedItem) {
    /**Searching the first salesperson in the queue */
    let queue = [];
    queue = queue.concat(dictionary['you']);
    const verifiedPeople = [];

    if (dictionary) {
        while (queue.length > 0) {
            let person = getAPerson();
            if (verifiedPeople.indexOf(person) == -1) {
                if (isSalesPerson(person)) {
                    return `${person} is a salesperson`;
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

    function getAPerson() {
        return queue.shift();
    }

    function emptyDictionayMessage() {
        return `There's no salesperson in the list`;
    }

    function isSalesPerson(person) {
        return person.endsWith(searchedItem);
    }

}



function showGraphBreadthFirstSearch() {
    const searchedItem = 's';
    const nodesList = setNodesList();

    document.write(`${breadthFirstSearch(nodesList, searchedItem)}`);

    function setNodesList() {
        const nodesList = [];
        nodesList['you'] = ['alice', 'bob', 'claire'];
        nodesList['bob'] = ['anuj', 'peggy'];
        nodesList['alice'] = ['peggy'];
        nodesList['claire'] = ['thom', 'jonny-s'];
        nodesList['anuj'] = [];
        nodesList['peggy'] = [];
        nodesList['thom'] = [];
        nodesList['jonny-s'] = [];
        return nodesList;
    }
    //Expected result: jonny-s is a salesPerson
}