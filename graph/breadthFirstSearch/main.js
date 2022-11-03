function breadthFirstSearch(peopleNodeListDictionary, searchedItem) {
    /**Searching the first salesperson in the peopleQueue */
    let peopleQueue = [];
    peopleQueue = peopleQueue.concat(peopleNodeListDictionary['me']);
    const verifiedPeople = [];

    if (peopleNodeListDictionary) {
        while (peopleQueue.length > 0) {
            const person = getFirstPersonFromQueue();
            if (isNotInVerifiedPeople(person)) {
                if (isSeller(person)) {
                    return `${person} is a seller`;
                } else {
                    verifiedPeople.push(person);
                    peopleQueue = peopleQueue.concat(peopleNodeListDictionary[person]);
                }
            }
        }
        return emptyDictionayMessage();
    } else {
        return emptyDictionayMessage();
    }

    function isNotInVerifiedPeople(person) {
        return verifiedPeople.indexOf(person) == -1;
    }

    function getFirstPersonFromQueue() {
        return peopleQueue.shift();
    }

    function emptyDictionayMessage() {
        return `There's no salesperson in the list`;
    }

    function isSeller(person) {
        return person.endsWith(searchedItem);
    }

}



function showGraphBreadthFirstSearch() {
    const searchedItem = 's';
    document.write(`${breadthFirstSearch(setNodesList(), searchedItem)}`);

    function setNodesList() {
        const nodesList = [];
        nodesList['me'] = ['alice', 'bob', 'claire'];
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