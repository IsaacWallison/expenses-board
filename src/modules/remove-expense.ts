import ExpenseRepository from '../repository/expense-repository';
import updateState from './update-state';

const removeExpense = (id: number) => {
  ExpenseRepository.removeExpenseById(id);
  updateState();
};

export default removeExpense;
