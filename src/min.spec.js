const min = require('./min');

describe('Min', () => {
    it("Should return the minimum value in the array", () => {
        expect(min([1,2,3,4])).toEqual(1);
    })
})