import editMode from '../modules/edit-mode';
import removeExpense from '../modules/remove-expense';

const handleBoardEvents = (e: MouseEvent) => {
  if (e.target instanceof HTMLButtonElement) {
    const expenseId = Number(e.target.dataset.expense);

    if (e.target.dataset.event === 'delete') return removeExpense(expenseId);
    if (e.target.dataset.event === 'edit') return editMode(expenseId);
  }
};

export default handleBoardEvents;
