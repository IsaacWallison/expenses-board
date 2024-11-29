import ExpenseRepository from '../repository/expense-repository';

const calculateExpenditure = () => {
  const expenses = ExpenseRepository.getExpenses();
  return expenses.reduce(
    (total, currentItem) => total + currentItem.expenditure,
    0
  );
};

export default calculateExpenditure;
