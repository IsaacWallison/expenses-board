import formatMoney from '../libs/format-money';
import select from '../libs/select';
import MoneyRepository from '../repository/money-repository';
import calculateExpenditure from './calculate-expenditure';
import renderExpenses from './render-expenses';

const updateState = () => {
  const userMoney = MoneyRepository.getMoney();
  const money = select<HTMLInputElement>('#form-money');
  const infoMoney = select<HTMLElement>('#info-money');
  const infoExpense = select<HTMLElement>('#info-expense');
  const infoResult = select<HTMLElement>('#info-result');

  const totalExpenditure = calculateExpenditure();
  const difference = +userMoney - totalExpenditure;

  money!.value = +userMoney > 0 ? userMoney.toString() : '';
  infoMoney!.innerText = formatMoney(+userMoney);
  infoExpense!.innerText = formatMoney(-totalExpenditure);
  infoResult!.innerText = formatMoney(difference);

  infoResult!.classList.remove('alarm', 'positive');
  infoResult!.classList.add(`${difference < 0 ? 'alarm' : 'positive'}`);

  renderExpenses();
};

export default updateState;