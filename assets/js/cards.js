import { comicMarvel } from "./comicMarvel.js";

 export function getComicCards(){
    let comicRow = document.getElementById("comicRow");

    comicMarvel.map(function(comic){
        const comicCol = document.createElement("div");
        comicCol.classList.add('col-xl-2')
        comicCol.classList.add('col-lg-2')
        comicCol.classList.add('col-md-2')
        comicCol.classList.add('col-sm-10')
        comicCol.classList.add('col-xs-10')

        const card = document.createElement("div")

        card.classList.add("card");
        card.classList.add("mt-2");
        card.classList.add("mb-2");

        const imgCard = document.createElement("img");
        imgCard.src= comic.img;
        imgCard.classList.add("card-img-top");

        const divBody = document.createElement("div")

        divBody.classList.add("card-title")

        const title = document.createElement("h5")

        title.classList.add("card-title")
        title.textContent = comic.name


        const groups = document.createElement("p")
        groups.classList.add("card-text")
        groups.textContent= comic.groups
        
        const price = document.createElement("p")
        price.classList.add("card-title")
        price.textContent= comic.price


        

        divBody.appendChild(title)
        divBody.appendChild(groups)
        divBody.appendChild(price)


        card.appendChild(imgCard)
        card.appendChild(divBody)
        

        comicCol.appendChild(card)

        comicRow.appendChild(comicCol)


    })
}
