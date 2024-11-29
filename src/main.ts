import select from './libs/select';
import createExpense from './modules/create-expense';
import updateMoney from './modules/update-money';
import updateState from './modules/update-state';
import handleBoardEvents from './handlers/board-events';
import cancelEdit from './modules/cancel-edit';
import confirmEdit from './modules/confirm-edit';
import './style.css';

const moneyField = select<HTMLInputElement>('#form-money');
const createExpenseButton = select<HTMLButtonElement>('#create-expense');
const cancelEditButton = select<HTMLButtonElement>('#cancel-edit');
const confirmEditButton = select<HTMLButtonElement>('#confirm-edit');
const expensesBoard = select<HTMLTableElement>('#expenses-board');

window.onload = () => {
  moneyField!.focus();
  updateState();
};

moneyField!.onchange = updateMoney;

createExpenseButton!.onclick = createExpense;
cancelEditButton!.onclick = cancelEdit;
confirmEditButton!.onclick = confirmEdit;
expensesBoard!.onclick = handleBoardEvents;
