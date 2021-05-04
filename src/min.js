const min = (elements) => {
    var minValue = 32000;
    elements.forEach(element => {
        if(element < minValue)
            minValue = element;
    });
    return minValue;
}

module.exports = min;