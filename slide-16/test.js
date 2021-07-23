import {test} from 'zora';

test('generator', ({eq}) => {
    
    function* countDown(limit = 5) {
        while (limit >= 0) {
            yield limit;
            limit--;
        }
    }
    
    eq([...countDown(3)], [3, 2, 1, 0]);
    
    for (const number of countDown(5)) {
        console.log(number);
    }
});

test('recursive yield', ({eq}) => {
    
    function* generator(limit ) {
        yield 1;
        yield 2;
        yield *[3,4]
    }
    
    eq([...generator()], [1, 2, 3, 4]);
});
