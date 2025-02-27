document.getElementById('cashout').addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById('cashoutsection').style.display = "block";
    document.getElementById('addmoneysection').style.display = "none";
     document.getElementById('trasiction').style.display = "none"
})

document.getElementById('addmoney').addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById('cashoutsection').style.display = "none";
    document.getElementById('addmoneysection').style.display = "block";
      document.getElementById('trasiction').style.display = "none"
})
document.getElementById('tras').addEventListener('click', function(){
    document.getElementById('addmoneysection').style.display = "none";
    document.getElementById('cashoutsection').style.display = "none";
    document.getElementById('trasiction').style.display = "block"
})