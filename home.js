// add mney to the account
/**
 * 1. create an event handler
 *     stop prevent page reload
 * 2. take the pin and validate and get money to be added to the account
 * 3. verify pin number.
 * 4: get the current balance
 * 5:  add add money with account balance
 */
// 1: create an event handler
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent page reload
    event.preventDefault();
    
    //   s2: get money to be added to the account
    const addMoney = document.getElementById('input-add-money').value;
                  // console.log(addMoney)
    // s-2 : get the pin number
    const pinNumber = document.getElementById('input-pin-num').value;
                  // console.log(pinNumber)
    // 3. verify pin number
    if(pinNumber==='1234'){
                 // console.log('added money to your account')
        // s-4: get the current balance
        const balance = document.getElementById('acc-balance').innerText;

        // s-5:  add add money with account balance
        const newBalance = parseFloat(balance) + parseFloat(addMoney)
        console.log(newBalance)

        // s-6: update the balance in ui/dom
        document.getElementById('acc-balance').innerText=newBalance;
    }else{
        alert('failed!. please try again')
    }
})



/**
 * 1.add event listener to the add money button from submit button
 *    make sure to preventDefault so thar the page does not reloads
 * 2. get the money user wants to add and the pin number
 * 3. verify the pin number . if wrong show an alert
 * 4. if pin matched get the main account current balance
 * 5. add money to be added with the current values (noted convert the string digit to float or int )
 * 6. update the balance in the DOM/UI
 */