// function doubleIt(num){
//     const result = num *2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);



function getInputValue(inputId){
const inputField = document.getElementById(inputId);
const inputAmountText = inputField.value;
const amountValue = parseFloat(inputAmountText);


//clearinput filed
inputField.value='';
return amountValue;
}

function updateTotaFlield(totalFieldId,Amount){
// debugger;
const totalElement = document.getElementById(totalFieldId);
const TotalText = totalElement.innerText;
const previousTotal = parseFloat(TotalText);

totalElement.innerText = previousTotal + Amount;
}

function updateBalance(Amount,isAdd){
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
  if(isAdd== true){
    balanceTotal.innerText = previousBalanceTotal + Amount;
     }
 else{
     balanceTotal.innerText = previousBalanceTotal - Amount;

    }
}






document.getElementById('deposit-button').addEventListener('click', function(){

//get and update deosit total
// const depositTotal = document.getElementById('deposite-total');
// const depositTotalText = depositTotal.innerText;
// const previousDepositTotal = parseFloat(depositTotalText);
// depositTotal.innerText = previousDepositTotal + depositAmount;



//update balance
// const balanceTotal = document.getElementById('balance-total');
// const balanceTotalText = balanceTotal.innerText;
// const previousBalanceTotal = parseFloat(balanceTotalText);
// balanceTotal.innerText = previousBalanceTotal + depositAmount;
const depositAmount = getInputValue('deposite-input');
updateTotaFlield('deposite-total', depositAmount);
updateBalance(depositAmount, true);

})

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    // const withdrawInput = document.getElementById('Withdraw-input');
    // const withdrawAmountText  = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);

    //get and update withdraw total
    //  const withdrawTotal = document.getElementById('withdraw-total');
    //  const previouswithdrawTotalText = withdrawTotal.innerText;
    //  const previouswithdrawTotal = parseFloat(previouswithdrawTotalText);
// withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount;


    

     //update balance afterv withdraw
    //  const balanceTotal = document.getElementById('balance-total');
    //  const balanceTotalText = balanceTotal.innerText;
    //  const previousBalanceTotal = parseFloat(balanceTotalText);
    //  balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    const withdrawAmount = getInputValue('Withdraw-input')
    updateTotaFlield('withdraw-total',withdrawAmount);
    updateBalance(withdrawAmount, false);


})

