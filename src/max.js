const max = (elements) => {
    var maxValue = 0;
    elements.forEach(element => {
        if(element > maxValue)
            maxValue = element;
    });
    return maxValue;
}

module.exports = max;