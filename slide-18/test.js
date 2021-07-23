import {createReadStream} from 'fs';
import {EventEmitter, on} from 'events';
import {test} from 'zora';
import rule from './rule.js';
import fixture from '../data/transactions.js';
import transactions from '../data/transactions.js';
import {compose} from '../slide-10/rule.js';
import {map, split} from './transducers.js';

const wait = (time = 200) => new Promise((resolve) => setTimeout(() => resolve(), time));

test('rule should return the sum of positive balances where category is "income"', (t) => {
    t.test('from array', async ({eq}) => {
        eq(await rule(fixture), 19000, '4500 + 8000 + 6500');
    });
    
    t.test('from Readable stream', async ({eq}) => {
        const fileStream = createReadStream('./data/transactions.txt', {encoding: 'utf8'});
        
        const readSource = compose([
            map(JSON.parse),
            split()
        ]);
        
        const pipeline = compose([rule, readSource]);
        
        eq(await pipeline(fileStream), 19000, '4500 + 8000 + 6500');
    });
});
