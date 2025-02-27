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

        let div = document.createElement('div');
        div.innerHTML = `
        <p class="mt-4 p-2 bg-red-600 text-white text-center border-1"> cashout ${valcashout} to main balance </p>
       
        `
        document.getElementById('trasiction').appendChild(div);


    }else{
       alert('error')
    }
})