import { comicMarvel } from "./comicMarvel.js";

import { enviarDatos } from "./operaciones.js";


 export function getComicCards(){
    let comicRow = document.getElementById("comicRow");

    comicMarvel.map(function(comic){
        const comicCol = document.createElement("div");
        comicCol.classList.add('col-xl-3')
        comicCol.classList.add('col-lg-3')
        comicCol.classList.add('col-md-3')
        comicCol.classList.add('col-sm-12')
        comicCol.classList.add('col-xs-12')


        const card = document.createElement("div")

        card.classList.add("card");
        card.classList.add("mt-2");
        card.classList.add("mb-2");

        const imgCard = document.createElement("img");
        imgCard.src= comic.img;
        imgCard.classList.add("csard-img-top");
        imgCard.style.width = "280px"; 
        imgCard.style.height = "370px";

        const divBody = document.createElement("div")

        divBody.classList.add("card-title")

        const title = document.createElement("h5")

        title.classList.add("card-title")
        title.textContent = comic.name


        const subtitle = document.createElement("p")
        subtitle.classList.add("card-text")
        subtitle.textContent= comic.groups
        
        const ultitle = document.createElement("p")
        ultitle.classList.add("card-title")
        ultitle.textContent= comic.price

        const btnComprar = document.createElement("button")
        btnComprar.classList.add("btn")
        btnComprar.classList.add("btn-danger")
        btnComprar.textContent = "Agregar al carrito"
        btnComprar.addEventListener("click", () =>{
            enviarDatos(name, groups,price, img)
        })


        

        divBody.appendChild(title)
        divBody.appendChild(subtitle)
        divBody.appendChild(ultitle)
        divBody.appendChild(btnComprar)


        card.appendChild(imgCard)
        card.appendChild(divBody)
        

        comicCol.appendChild(card)

        comicRow.appendChild(comicCol)


    })
}

import { dccomics } from "./dccomics.js";


 export function getDcCards(){
    let dcRow = document.getElementById("dcRow");

    dccomics.map(function(dc){
        const dcCol = document.createElement("div");
        dcCol.classList.add('col-xl-3')
        dcCol.classList.add('col-lg-3')
        dcCol.classList.add('col-md-3')
        dcCol.classList.add('col-sm-10')
        dcCol.classList.add('col-xs-10')

        const card = document.createElement("div")

        card.classList.add("card");
        card.classList.add("mt-2");
        card.classList.add("mb-2");

        const imgCard = document.createElement("img");
        imgCard.src= dc.img;
        imgCard.classList.add("card-img-top");
        imgCard.style.width = "280px"; 
        imgCard.style.height = "370px";






        const divBody = document.createElement("div")

        divBody.classList.add("card-title")

        const title = document.createElement("h5")

        title.classList.add("card-title")
        title.textContent = dc.name

        const subtitle = document.createElement("p")
        subtitle.classList.add("card-text")
        subtitle.textContent= dc.groups
        
        const ultitle = document.createElement("p")
        ultitle.classList.add("card-title")
        ultitle.textContent= dc.price

        const btnComprar = document.createElement("button")
        btnComprar.classList.add("btn")
        btnComprar.classList.add("btn-danger")
        btnComprar.textContent = "Agregar al carrito"
        btnComprar.addEventListener("click", () =>{
            enviarDatos(dc.name, dc.groups, dc.price, dc.img)
        })


        

        divBody.appendChild(title)
        divBody.appendChild(subtitle)
        divBody.appendChild(ultitle)
        divBody.appendChild(btnComprar)


        card.appendChild(imgCard)
        card.appendChild(divBody)
        

        dcCol.appendChild(card)

        dcRow.appendChild(dcCol)


    })
}