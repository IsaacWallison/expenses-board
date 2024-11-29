import select from '../libs/select';
import ExpenseRepository from '../repository/expense-repository';
import Expense from '../types/Expense';
import updateState from './update-state';

const createExpense = () => {
  const description = select<HTMLInputElement>('#form-description');
  const expenditure = select<HTMLInputElement>('#form-expenditure');

  if (!expenditure!.value) return;

  const expense: Expense = {
    id: Date.now(),
    description: description!.value || 'No description',
    expenditure: +expenditure!.value,
  };
  ExpenseRepository.addExpense(expense);
  description!.value = '';
  expenditure!.value = '';
  updateState();
};

export default createExpense;
