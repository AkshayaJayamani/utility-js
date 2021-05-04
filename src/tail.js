const tail = (elements) => {
    var element = [];
    for (let index = 1; index < elements.length; index++) {
        element[index-1] = elements[index];   
    }
    return element;
}

module.exports = tail;