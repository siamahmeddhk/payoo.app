document.getElementById('login-btn').addEventListener('click', function(e){
    e.preventDefault();
    let numfiled = document.getElementById('numfield').value;
    
    let pinfield = document.getElementById('pinfield').value;
    if(numfiled.length === 11 && pinfield === '1234'){
        window.location.href = './main.html';
    }else{
        console.log('input valid number')
    }
})