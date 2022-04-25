// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let amount = localStorage.getItem("amount")

amount = Number(amount);

document.getElementById("wallet").innerText = amount

let movies = JSON.parse(localStorage.getItem("movie"))

let movieBox = document.getElementById("movie")

let img = document.createElement("img")
img.src = movies.Poster;

let title = document.createElement("p")
title.innerText = movies.Title

movieBox.append(img,title);

function payment(){

    let seat = document.getElementById("number_of_seats").value
    seat = Number(seat)
    let total_amount = 100*seat;

    if(total_amount < amount || total_amount === amount ){
        alert("Booking successful!")

        amount = amount-total_amount;
        
        localStorage.setItem("amount",amount)

        document.getElementById("wallet").innerText = amount;
    }else{
        alert("Insufficient Balance!")
    }

}