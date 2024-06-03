import {comicMarvel} from './comicMarvel.js'
import {dccomic} from './dccomics.js'
 const carrito = []


document.querySelectorAll('.agregar').forEach(button => {
    button.addEventListener('click',agregarAlCarrito)
})

function agregarAlCarrito(event) {
    const producto = event.target.parentElement;
    const name = producto.dataset.name;
    const price = parseFloat(producto.dataset.price);
    const stock = parseInt(producto.dataset.stock);

    if (stock>0){ 
        carrito.push({name, price});
        producto.dataset.stock = stock -1;
        actualizarCarrito();
    }else{
        alert('¡Producto agotado!');
    }
}

function eliminarDelCarrito(index){
    const producto = carrito [index];
    const productos = document.querySelectorAll;
    const productoHTML = Array.from(productos).find(p=> p.dataset.name === producto.name);
    productoHTML.dataset.stock = parseInt(productoHTML.dataset.stock) + 1;

    carrito.splice(index,1);
    actualizarCarrito();

}

function actualizarCarrito() {
    const carritoElemento = document.createElement('carrito');
    carritoElemento.innerHTML = '';

    carrito.forEach ((producto,index) => {
        const li = document.createElement('li');
        li.textContent = `${producto.name} - $${producto.price}`;
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => eliminarDelCarrito(index));
        li.appendChild(botonEliminar);
        carritoElemento.appendChild(li);
    })

}

