import {EventEmitter} from 'events';
import {test} from 'zora';
import {fromArray, fromEventEmitter} from './rule.js';
import fixture from '../data/transactions.js';
import transactions from '../data/transactions.js';

test('rule should return the sum of positive balances where category is "income"', ({eq}) => {
    eq(fromArray(fixture), 19000, '4500 + 8000 + 6500');
});

test('using an event emitter', async ({eq}) => {
    const emitter = new EventEmitter();
    
    const awaitingValue = fromEventEmitter(emitter, 'transaction');
    
    for (const transaction of transactions) {
        emitter.emit('transaction', transaction);
    }
    
    // stop stream
    emitter.removeAllListeners('transaction');
    
    eq(await awaitingValue, 19000, '4500 + 8000 + 6500');
});
