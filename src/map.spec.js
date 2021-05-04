const map = require('./map');

describe('Map', () => {
    it('Should return empty array when the map is empty', () => {
        expect(map([], 'cube')).toEqual([]);
    })
    it('Should return the same elements when identity is given', () => {
        expect(map([1,2,3], 'identity')).toEqual([1,2,3]);
    })
    it('Should return the cube of all the elements when cube is given', () => {
        expect(map([1,2,3], 'cube')).toEqual([1,8,27]);
    })
    it('Should return the addition of the given element with 1', () => {
        expect(map(10)).toEqual(11);
    })
})