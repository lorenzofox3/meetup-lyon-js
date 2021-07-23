import {compose} from '../slide-10/rule.js';
import {isBalancePositive, isCategoryIncome, pickBalance, sum} from '../slide-5/rule.js';
import {filter, map, reduce} from './transducers.js';

export default compose([
    reduce(sum, 0),
    map(pickBalance),
    filter(isBalancePositive),
    filter(isCategoryIncome)
]);
