import MoneyRepository from '../repository/money-repository';
import updateState from './update-state';

const updateMoney = (ev: Event) => {
  if (ev.target instanceof HTMLInputElement) {
    MoneyRepository.updateMoney(+ev.target.value);
  }
  updateState();
};

export default updateMoney;
