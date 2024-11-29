const formatMoney = (money: number) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(money);
};

export default formatMoney;
