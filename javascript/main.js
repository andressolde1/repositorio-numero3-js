let carrito = [];

function agregarAlCarrito(id, nombre, precio) {
    const productoExistente = carrito.find(producto => producto.id === id);
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        const producto = {
            id: id,
            nombre: nombre,
            precio: precio,
            cantidad: 1
        };
        carrito.push(producto);
    }
    mostrarCarrito();
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(producto => producto.id !== id);
    mostrarCarrito();
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
    carrito.forEach(producto => {
        const elemento = document.createElement('li');
        const nombreProducto = document.createElement('span');
        nombreProducto.textContent = `${producto.nombre} x ${producto.cantidad} - Precio: $${producto.precio}`;
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => {
            eliminarDelCarrito(producto.id);
        });
        elemento.appendChild(nombreProducto);
        elemento.appendChild(botonEliminar);
        listaCarrito.appendChild(elemento);
    });
    calcularTotal();
}

function calcularTotal() {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });
    const totalElement = document.getElementById('total');
    totalElement.textContent = `$${total}`;
}

function pagar() {
    alert("¡Gracias por tu compra!");
    carrito = [];
    mostrarCarrito();
}
function eliminarDelCarrito(id) {
    const productoIndex = carrito.findIndex(producto => producto.id === id);
    if (productoIndex !== -1) {
        if (carrito[productoIndex].cantidad > 1) {
            carrito[productoIndex].cantidad--;
        } else {
            carrito.splice(productoIndex, 1);
        }
    }
    mostrarCarrito();
}