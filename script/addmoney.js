document.getElementById('add-btn').addEventListener("click", function(e){
    e.preventDefault();
    let pass = document.getElementById('pass').value;
    let passwrd = parseInt(pass);
    let add = document.getElementById('addmoney').value;
    let addval = parseFloat(add);
    let mainbal = document.getElementById('mainbal').innerText;
    let mainbalval = parseFloat(mainbal);

    if(passwrd === 1234){
        let sum = addval + mainbalval;
        document.getElementById('mainbal').innerText = sum;
    }else{
        
    }
})