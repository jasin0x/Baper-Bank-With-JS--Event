// add event hndaler in withdraw btn
console.log('paisi');
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // get the withdraw amout from input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // clear input field
    withdrawField.value = '';
    if (isNaN(newWithdrawAmount)){
        alert('Please put valid number');
        return;
    }

    // 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithrawTotal = parseFloat(previousWithdrawTotalString);

    

    // get balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    // // clear input field
    // withdrawField.value = '';

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Ato taka nai');
        return;
    }

    // calculate total withdraw amount 
    const currentWithdrawTotal = previousWithrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // calculate new balance total
    const newBalanceToal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceToal;
    
    

})