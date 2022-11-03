function breadthFirstSearch(sellersNodeListDictionary, searchedItem) {
    /**Searching the first salesperson in the sallersQueue */
    let sallersQueue = [];
    sallersQueue = sallersQueue.concat(sellersNodeListDictionary['me']);
    const verifiedSellers = [];

    if (sellersNodeListDictionary) {
        while (sallersQueue.length > 0) {
            const seller = getFirstSallerFromQueue();
            if (verifiedSellers.indexOf(seller) == -1) {
                if (isSeller(seller)) {
                    return `${seller} is a seller`;
                } else {
                    verifiedSellers.push(seller);
                    sallersQueue = sallersQueue.concat(sellersNodeListDictionary[seller]);
                }
            }
        }
        return emptyDictionayMessage();
    } else {
        return emptyDictionayMessage();
    }

    function getFirstSallerFromQueue() {
        return sallersQueue.shift();
    }

    function emptyDictionayMessage() {
        return `There's no salesperson in the list`;
    }

    function isSeller(seller) {
        return seller.endsWith(searchedItem);
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