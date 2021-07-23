import {isBalancePositive, isCategoryIncome, pickBalance, sum} from '../slide-5/rule.js';

export const compose = (fns) => (arg) => fns.reduceRight((y, nextFunc) => nextFunc(y), arg);

const filter = (predicate) => (filterable) => filterable.filter(predicate);

const map = (mapFn) => (functor) => functor.map(mapFn);

const reduce = (reducer, init) => (foldable) => foldable.reduce(reducer, init);

export default compose([
    reduce(sum, 0),
    map(pickBalance),
    filter(isBalancePositive),
    filter(isCategoryIncome)
]);
