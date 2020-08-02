function makeChange(amount) {
  amount = amount * 100;

  let pennies = 0,
    nickles = 0,
    dimes = 0,
    quarters = 0,
    halfdollars = 0,
    dollars = 0,
    amountLeft = amount;

  if (amountLeft % 100 || amountLeft % 100 == 0) {
    dollars = Math.floor(amountLeft / 100);
    amountLeft = amountLeft % 100;
  }
  if (amountLeft % 50 || amountLeft % 50 == 0) {
    halfdollars = Math.floor(amountLeft / 50);
    amountLeft = amountLeft % 50;
  }
  if (amountLeft % 25 || amountLeft % 25 == 0) {
    quarters = Math.floor(amountLeft / 25);
    amountLeft = amountLeft % 25;
  }
  if (amountLeft % 10 || amountLeft % 10 == 0) {
    dimes = Math.floor(amountLeft / 10);
    amountLeft = amountLeft % 10;
  }
  if (amountLeft % 5 || amountLeft % 5 == 0) {
    nickles = Math.floor(amountLeft / 5);
    amountLeft = amountLeft % 5;
  }
  if (amountLeft % 1 == 0) {
    pennies = amountLeft / 1;
    amountLeft = amountLeft % 1;
  }

  let jsonReturn = {
    dollars,
    halfdollars,
    quarters,
    dimes,
    nickles,
    pennies,
  };

  return jsonReturn;

  //   return {
  //     dollars,
  //     halfdollars,
  //     quarters,
  //     dimes,
  //     nickles,
  //     pennies,
  //   };
}

module.exports = { makeChange };
