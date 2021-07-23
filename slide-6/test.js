import {test} from 'zora';
import rule from './rule.js';
import fixture from '../data/transactions.js';

test('rule should return the sum of positive balances where category is "income"', ({eq}) => {
    eq(rule(fixture), 19000, '4500 + 8000 + 6500');
});
