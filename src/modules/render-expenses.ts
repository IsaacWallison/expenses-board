import createBoard from '../components/board';
import createExpenseItem from '../components/expense-item';
import select from '../libs/select';
import ExpenseRepository from '../repository/expense-repository';

const renderExpenses = () => {
  const expensesBoard = select<HTMLTableElement>('#expenses-board')!;
  const noExpenses = select<HTMLDivElement>('#no-expenses');
  noExpenses!.classList.remove('none');
  expensesBoard.innerHTML = '';

  const expenses = ExpenseRepository.getExpenses();
  if (!expenses.length) return;

  noExpenses!.classList.add('none');
  expensesBoard.insertAdjacentHTML('beforeend', createBoard());

  const expenseItems = select<HTMLTableSectionElement>('#expense-items');
  expenses.forEach((expense) => {
    expenseItems?.insertAdjacentHTML('beforeend', createExpenseItem(expense));
  });
};

export default renderExpenses;
