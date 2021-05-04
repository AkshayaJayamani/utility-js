const map = (elements, functionToPerform) => {
    if(elements.length == 0){
        return [];
    }
    else if(functionToPerform == 'identity'){
        return identity(elements);
    }
    else if(functionToPerform == 'cube'){
        return cube(elements);
    }
    else 
        return elements+1;
}

const identity = (elements) => {
    return elements;
}

const cube = (elements) => {
    var values = [], index = 0;
    elements.forEach(element => {
        values[index] = element * element * element;
        index++;
    });
    return values;
}

module.exports = map;