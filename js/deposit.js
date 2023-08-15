// @ts-nocheck
document.getElementById("btn_deposit")?.addEventListener("click", function () {
  const deposit_field = document.getElementById("deposit_field");
  const depositValueString = deposit_field.value;
  const Deposit_amount = document.getElementById("deposit_amount");
  const oldDepositTotalString = Deposit_amount.innerText;
  const oldDepositTotal_amount = parseFloat(oldDepositTotalString);
  
  const depositValue = parseFloat(depositValueString);
  if (isNaN(depositValue)) {
    deposit_field.value = "";
    alert("Provide a valid number");
    
    return;
    
    
  }
  const NewTotalDeposit_amount = oldDepositTotal_amount + depositValue;

  Deposit_amount.innerText = NewTotalDeposit_amount;

  // balance amount
  const balance_amount = document.getElementById("balance_amount");
  const oldBalance_amountString = balance_amount.innerText;
  const oldBalance_amount = parseFloat(oldBalance_amountString);
  const newBalance_amount = oldBalance_amount + depositValue;
  balance_amount.innerText = newBalance_amount;

  deposit_field.value = "";
});
