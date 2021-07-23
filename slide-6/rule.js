import {isBalancePositive, isCategoryIncome, pickBalance, sum} from '../slide-5/rule.js';

export default (transactions) => {
    let total = 0;
    for (const transaction of transactions) {
        if(isBalancePositive(transaction) && isCategoryIncome(transaction)){
            total = sum(total, pickBalance(transaction));
        }
    }
    return total;
}
