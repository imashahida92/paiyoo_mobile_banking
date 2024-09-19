
//step-1:  set a event handler
document.getElementById('button-login').addEventListener('click',function(event){
     //step-2:   prevent default behavior(reloading browser)
     event.preventDefault();
     // console.log('login button clicked')

     //step-3:  Get the phone number
     const phonenum = document.getElementById('phone-num').value;
     console.log(phonenum);
     //step-3:  Get the pin number
     const pinnum = document.getElementById('pin-num').value;
     console.log(pinnum);

 
     //temporary  : validate phone and pin number
     if(phonenum === '05050505' && pinnum === '1234'){
          console.log('you are logged in');
          window.location.href='home.html';
     }else{
          alert('wrong phone number or pin');
     }

})