export default (transactions) => transactions
    .filter(isCategoryIncome)
    .filter(isBalancePositive)
    .map(pickBalance)
    .reduce(sum, 0)

export const isCategoryIncome = (transaction) => {
    console.log('isCategoryIncome');
    return transaction.category === 'income';
}
export const isBalancePositive = ({balance}) => {
    console.log('isBalancePositive');
    return balance > 0;
};
export const pickBalance = ({balance}) => {
    console.log('pickBalance');
    return balance;
}
export const sum = (total, balance) => {
    console.log('sum');
    return total + balance;
};
