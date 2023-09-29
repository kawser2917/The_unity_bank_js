document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositAmount = document.getElementById("deposit-amount")
    const deposit = depositAmount.value;

    const totalDepositAmount = document.getElementById('total-deposit')
    const totalDeposit = totalDepositAmount.innerText
    totalDepositAmount.innerText = deposit
 
})