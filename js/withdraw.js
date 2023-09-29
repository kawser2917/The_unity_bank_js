document.getElementById("btn-withdraw").addEventListener("click",function(){
    const withdrawField = document.getElementById("withdraw-amount")
    const newWithdrawAmoutString = withdrawField.value
    const newWithdrawAmount = parseFloat(newWithdrawAmoutString)

    const totalBalance = document.getElementById("total-balance")
    const totalBalanceAmountString = totalBalance.innerText
    const totalBalanceAmount = parseFloat(totalBalanceAmountString)

    if (newWithdrawAmount>totalBalanceAmount){
        alert("You don't have enogh money")
        return
    }

    const previousWithdrawElement = document.getElementById("total-withdraw")
    const previousWithdrawAmountString = previousWithdrawElement.innerText
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString)

    const totalWithdraw = newWithdrawAmount + previousWithdrawAmount
    previousWithdrawElement.innerText = totalWithdraw

  

    const newTotalBalance = totalBalanceAmount - newWithdrawAmount
    totalBalance.innerText = newTotalBalance

    withdrawField.value = ""

})