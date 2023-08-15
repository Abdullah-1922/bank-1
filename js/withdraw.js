// @ts-nocheck
document.getElementById("btn_withdraw")?.addEventListener("click", function () {
  const withdraw_field = document.getElementById("withdraw_field");
  const withdraw_amountString = withdraw_field.value;
  const withdraw_amount = parseFloat(withdraw_amountString);
  if(isNaN(withdraw_amount)){
    alert('Provide a valid number')
     withdraw_field.value = "";
    return
  }
  const total_withdraw = document.getElementById("total_withdraw");
  const total_withdrawString = total_withdraw.innerText;
  const oldTotal_withdraw_amount = parseFloat(total_withdrawString);
  
  //   remove balance
  const balance_amount = document.getElementById("balance_amount");
  const oldBalance_amountString = balance_amount.innerText;
  const oldBalance_amount = parseFloat(oldBalance_amountString);
  if(withdraw_amount > oldBalance_amount){
    alert('bapper ato taka nai')
    withdraw_field.value = "";
    return
  }
  const newTotal_withdraw_amount = oldTotal_withdraw_amount + withdraw_amount;
  total_withdraw.innerText = newTotal_withdraw_amount;

  const newBalance_amount = oldBalance_amount - withdraw_amount;
  balance_amount.innerText = newBalance_amount;

  withdraw_field.value = "";
});
