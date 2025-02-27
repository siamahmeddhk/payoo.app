document.getElementById('add-btn').addEventListener("click", function(e){
    e.preventDefault();
    let pass = document.getElementById('pass').value;
    let passwrd = parseInt(pass);
    let add = document.getElementById('add').value;
    let addval = parseFloat(add);
    let mainbal = document.getElementById('mainbal').innerText;
    let mainbalval = parseFloat(mainbal);
    if(passwrd === 1234){
        let sum = addval + mainbalval;
        document.getElementById('mainbal').innerText = sum;

        let div = document.createElement('div');
        div.innerHTML = `
        <p class="p-2 bg-green-600 text-white text-center border-1 mt-4"> added ${addval} to main balance </p>
       
        `
        document.getElementById('trasiction').appendChild(div);
  


    }else{
        return 'not ok'
    }
})