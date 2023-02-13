document.getElementById('btn-deposit').addEventListener('click',function(){
    // get the amount form input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);

    // get the current deposti total amount
    const depositTotalElement =document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalElement.innerText); 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;


    // get current total ballance
    const balanceTotalElement = document.getElementBy('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    // calculate total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;


    // clearing the deposit field
    depositField.value= ''; 


})