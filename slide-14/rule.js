import {isBalancePositive, isCategoryIncome, pickBalance, sum} from '../slide-5/rule.js';
import {compose} from '../slide-10/rule.js';
import {filter, map, transduceArrayValues, transduceEventEmitter} from './transducers.js';

export const pipeline = compose([
    filter(isCategoryIncome),
    filter(isBalancePositive),
    map(pickBalance)
])(sum);

export const fromArray = transduceArrayValues(pipeline);
export const fromEventEmitter = transduceEventEmitter(pipeline);
