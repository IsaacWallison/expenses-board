import disableButtons from '../libs/disable-buttons';
import select from '../libs/select';
import toggleVisible from '../libs/toggle-visible';
import ExpenseRepository from '../repository/expense-repository';
import state from '../state';

const editMode = (id: number) => {
  const expense = ExpenseRepository.getExpenseById(id);

  const description = select<HTMLInputElement>('#form-description');
  const expenditure = select<HTMLInputElement>('#form-expenditure');

  state.isEditing = true;
  state.expenseToBeEditedId = id;

  disableButtons("button[data-event='edit']");
  disableButtons("button[data-event='delete']");
  toggleVisible('#create-expense');
  toggleVisible('#cancel-edit');
  toggleVisible('#confirm-edit');

  expense?.description && (description!.value = expense.description);
  expense?.expenditure && (expenditure!.value = `${expense.expenditure}`);

  description!.focus();
};

export default editMode;
