import select from '../libs/select';
import ExpenseRepository from '../repository/expense-repository';
import state from '../state';
import Expense from '../types/Expense';
import cancelEdit from './cancel-edit';
import updateState from './update-state';

const confirmEdit = () => {
  if (!state.isEditing) return;

  const description = select<HTMLInputElement>('#form-description')!.value;
  const expenditure = select<HTMLInputElement>('#form-expenditure')!.value;

  if (!description || !expenditure) return;

  const updatedExpense: Omit<Expense, 'id'> = {
    description,
    expenditure: +expenditure,
  };

  ExpenseRepository.updateExpenseById(
    state.expenseToBeEditedId,
    updatedExpense
  );

  cancelEdit();
  updateState();
};

export default confirmEdit;
