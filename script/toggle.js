document.getElementById('cashout').addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById('cashoutsection').style.display = "block";
    document.getElementById('addmoneysection').style.display = "none";
})

document.getElementById('addmoney').addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById('cashoutsection').style.display = "none";
    document.getElementById('addmoneysection').style.display = "block";
})