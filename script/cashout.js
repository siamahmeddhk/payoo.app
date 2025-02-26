document.getElementById('out-btn').addEventListener('click', function(e){
    e.preventDefault();
    let pindai = document.getElementById('password').value;
    let validpaindai = parseInt(pindai);
    let addcashout = document.getElementById('addcashout').value;
    let valcashout = parseFloat(addcashout);
    let mainbal = document.getElementById('mainbal').innerText;
    let outmainbal = parseFloat(mainbal);
    if(validpaindai === 1234){
        let out = outmainbal - valcashout;
        document.getElementById('mainbal').innerText = out;
    }else{
       alert('error')
    }
})