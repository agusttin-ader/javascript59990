const $CARRITO = document.getElementById('carrito');

const STORAGE_CART = localStorage.getItem('cart');

const CART = STORAGE_CART ? JSON.parse(STORAGE_CART) : [];

function renderCart() {
    $CARRITO.innerHTML = '';
    CART.forEach((element) => {
    const $LI = document.createElement('li');
    $LI.textContent = `${element.modelo} - ${element.capacidad}GB - $${element.precio}`;
    $CARRITO.appendChild($LI);
    });
}

renderCart();

const TOTAL_CART_VALUE = CART.reduce((acc, element) => acc + element.precio, 0);

const $TOTAL = document.getElementById('total');
$TOTAL.textContent = `Total: $${TOTAL_CART_VALUE}`;

const $VACIAR_CARRITO = document.getElementById('btnVaciarCarrito');

$VACIAR_CARRITO.addEventListener('click', () => {
    localStorage.removeItem('cart');

    $TOTAL.textContent = 'Total: $0';
    $CARRITO.innerHTML = '';
});