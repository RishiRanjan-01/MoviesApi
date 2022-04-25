// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

// `https://www.omdbapi.com/?s=${search}&apikey=4be1bafe

let amount = localStorage.getItem("amount")

document.getElementById("wallet").innerText = amount

async function searchMovies(){

    let query = document.getElementById("search").value

    const url = `https://www.omdbapi.com/?s=${query}&apikey=4be1bafe`

    const res = await fetch(url)

    const data = await res.json()

    console.log(data.Search)

    appendMovies(data.Search)

}


function appendMovies(data){

    let MoviesBox = document.getElementById("movies")
 
    MoviesBox.innerHTML = null;

    data.forEach((elem)=>{
        let div = document.createElement("div")

        let img = document.createElement("img");
        img.src = elem.Poster

        let title = document.createElement("p")
        title.innerText = elem.Title

        let btn1 = document.createElement("button")
        btn1.innerText = "Book Now"
        btn1.setAttribute("class","book_now")
        btn1.addEventListener("click", ()=>{
            bookMovie(elem);
        })


        div.append(img,title,btn1)

        MoviesBox.append(div)
    })

}

let id;

function debounce(func,delay){

    if(id){
        clearTimeout(id)
    }

    id = setTimeout(()=>{
        func();
    },delay)

}

function bookMovie(elem){
    let movies = elem;

    localStorage.setItem("movie",JSON.stringify(movies));

    window.location.href = "checkout.html"
}