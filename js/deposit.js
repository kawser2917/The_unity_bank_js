document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositAmount = document.getElementById("deposit-amount")
    const newDepositAmountString = depositAmount.value;
    const newDepositAmount = parseFloat(newDepositAmountString)

    const totalDepositAmount = document.getElementById('total-deposit')
    const previousDepositAmountString = totalDepositAmount.innerText
    const previousDepositAmount = parseFloat(previousDepositAmountString)

    const currentDeposit = newDepositAmount + previousDepositAmount
    totalDepositAmount.innerText = currentDeposit

    const totalBalance = document.getElementById("total-balance")
    const totalBalanceAmountString = totalBalance.innerText
    const totalBalanceAmount = parseFloat(totalBalanceAmountString)

    const newTotalBalance = totalBalanceAmount + newDepositAmount
    totalBalance.innerText = newTotalBalance

    depositAmount.value = ""
 
})

