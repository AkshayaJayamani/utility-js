const head = require('./head');

describe('Head', () =>{
    it('Should return the first value', () =>{
        expect(head([1,2,3])).toEqual(1);
    })

    it('Should return undefined for empty values', () =>{
        expect(head([])).toEqual(undefined);
    })
})