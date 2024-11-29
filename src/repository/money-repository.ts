class MoneyRepository {
  private static storage = sessionStorage;

  static getMoney() {
    return this.storage.getItem('user-money') || 0;
  }

  static updateMoney(money: number) {
    this.storage.setItem('user-money', money.toString());
  }
}

export default MoneyRepository;
