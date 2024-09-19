document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const casOut = document.getElementById('input-cash-out').value;
    const pinNum = document.getElementById('cash-out-pin-num').value;
    if(pinNum === '1234'){
        // console.log(casOut)
        const accoutBalance = document.getElementById('acc-balance').innerText;
        const newBalance = parseFloat(accoutBalance) - parseFloat(casOut);
        document.getElementById('acc-balance').innerText = newBalance;
    }else{
        alert('Failed!. please try again');
    }
})