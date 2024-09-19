// cash out display
document.getElementById('cash-out-display').addEventListener('click',function(){
    // console.log('cash out')
    // show cash out
    document.getElementById('cash-out-form').classList.remove('hidden');
    // hide the add form
    document.getElementById('cash-in-form').classList.add('hidden');
})

document.getElementById('cash-in-display').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('cash-in-form').classList.remove('hidden')
})