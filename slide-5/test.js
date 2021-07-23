import {test} from 'zora';
import rule, {isBalancePositive} from './rule.js';
import fixture from '../data/transactions.js';

test('rule should return the sum of positive balances where category is "income"', ({eq}) => {
    eq(rule(fixture), 19000, '4500 + 8000 + 6500');
});

test.skip('utility functions', ({test}) => {
    test('isBalancePositive', ({eq}) => {
        eq(isBalancePositive({balance: 32}), true);
        eq(isBalancePositive({balance: -43}), false);
    });
    
    /* etc */
});
