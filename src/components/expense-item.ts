import formatMoney from '../libs/format-money';
import Expense from '../types/Expense';

const createExpenseItem = (expense: Expense) => {
  return `
            <tr class='expense-alarm'>
                <td>${expense.description}</td>
                <td>${formatMoney(expense.expenditure)}</td>
                <td><button class="btn--blue fas fa-edit" data-event="edit" data-expense='${
                  expense.id
                }'></button></td>
                <td><button class="btn--alarm fas fa-minus" data-event="delete" data-expense='${
                  expense.id
                }'></button></td>
            </tr>
        `;
};

export default createExpenseItem;
