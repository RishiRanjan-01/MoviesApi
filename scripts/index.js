// Store the wallet amount to your local storage with key "amount"

let money = localStorage.getItem("amount") || 0

money = Number(money)
console.log(typeof(money))

document.getElementById("wallet").innerText = money

function addMoney(){

   let amount = document.getElementById("amount").value

   amount = Number(amount)

   money = money+amount;

    localStorage.setItem("amount",Number(money))

    document.getElementById("wallet").innerText = money
    
}