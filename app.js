const itemInput = document.querySelector('#input-item');
const itempriceInput = document.querySelector('#input-itemprice');
const hmiInput = document.querySelector('#input-hmi');
const cancelButton = document.querySelector('#btn-clear');
const addButton = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertInputControl = document.querySelector('ion-alert-controller');


let myTotalExpenses = 0;

const clear =() => {
    itemInput.value = '';
    itempriceInput.value = '';
    hmiInput.value = '';
};

cancelButton.addEventListener('click', clear);

addButton.addEventListener('click', () => {
    console.log("Expense added!");
    const itemEntered = itemInput.value;
    const itempriceEntered = itempriceInput.value;
    const hmiEntered = hmiInput.value;
    let total = itempriceEntered * hmiEntered;


    if (itemEntered.trim().length <= 0 || itempriceEntered.trim().length <= 0 || hmiEntered.trim().length <= 0
      )
        {
            alert("Please input reason and amount!")
           
            return;
        }    
        const newExpenses = document.createElement('ion-item');
        newExpenses.textContent = itemEntered + ': ₱' + total;
        expensesList.appendChild(newExpenses);

       
        myTotalExpenses += total;
        
        totalExpensesOutput.textContent = myTotalExpenses;
        clear();
});