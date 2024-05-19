const loanAmountEl = document.getElementById("loan-amount");

const interestRateEl = document.getElementById("interest-rate");

const totalMonthEl = document.getElementById("total-month");

const paymentEl = document.getElementById("payment");

function calculateLoan() {
  const loanAmountValue = loanAmountEl.value;
  const interestValue = interestRateEl.value;
  const totalMonthValue = totalMonthEl.value;

  const interestRate =
    (loanAmountValue * interestValue * 0.01) / totalMonthValue;
  const monthlyPayment = (
    loanAmountValue / totalMonthValue +
    interestRate
  ).toFixed(2);

  paymentEl.innerHTML = `Monthly Payment : ${monthlyPayment}`;
  console.log(monthlyPayment);
}