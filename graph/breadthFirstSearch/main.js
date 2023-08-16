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
                    return `Result: <strong>${person}</strong> is a seller`;
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
    const searchedItem = '-s';
    document.write(`NodeList: <br> ${getNodesListToString()}`);
    document.write(`<h4>Expected result: <strong>jonny-s</strong> is a seller</h4>`);
    document.write(`<h4>Searched Item: '-s'<h4>`);
    
    document.write(`${breadthFirstSearch(getNodesList(), searchedItem)}`);

    function getNodesList() {
        const nodesList = {};
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

    function getNodesListToString() {
        return JSON.stringify(getNodesList())
            .replace(/[{}"]/g, "")
            .replace(/],/g, "]<br>")
            .replace(/,/g, ", ")
    }
}