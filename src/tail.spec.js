const tail = require('./tail');

describe('Tail', () =>{
    it('Should return everything except first element', () =>{
        expect(tail([1,2,3])).toEqual([2,3]);
    })
    it('Should return empty array for no elements', () =>{
        expect(tail([])).toEqual([]);
    })
})