import Expense from '../types/Expense';

class ExpenseRepository {
  private static storage = sessionStorage;

  static getExpenseById(id: number) {
    const expenses = this.getExpenses();
    return expenses.find((expense) => expense.id === id);
  }

  static getExpenses(): Expense[] {
    return JSON.parse(this.storage.getItem('expenses') || '[]');
  }

  static addExpense(expense: Expense) {
    const expenses: Expense[] = this.getExpenses();
    expenses.push(expense);
    this.store(expenses);
  }

  static removeExpenseById(id: number) {
    const expenses = this.getExpenses();
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    this.store(updatedExpenses);
  }

  static updateExpenseById(id: number, expense: Omit<Expense, 'id'>) {
    const expenses = this.getExpenses();
    const updatedExpenses = expenses.map((e) => {
      if (e.id === id) {
        Object.entries(expense).forEach(([k, v]) => {
          k === 'description' && (e.description = v as string);
          k === 'expenditure' && (e.expenditure = v as number);
        });
      }
      return e;
    });
    this.store(updatedExpenses);
  }

  static store(expenses: Expense[]) {
    this.storage.setItem('expenses', JSON.stringify(expenses));
  }
}

export default ExpenseRepository;
