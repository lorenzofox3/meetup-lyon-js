import {test} from 'zora';

test('array is an iterable', ({eq, fail}) =>{
    const array = [1,2,3,4];
    
    eq(typeof array[Symbol.iterator], 'function');
    eq([...array], array);
    
    try{
        for (const number of array) {
            console.log(number);
        }
    } catch (e){
        fail('should not throw');
    }
})
