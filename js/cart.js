document.addEventListener('DOMContentLoaded', () => {
    const $CARRITO = document.getElementById('carrito');
    const STORAGE_CART = localStorage.getItem('cart');
    let CART = STORAGE_CART ? JSON.parse(STORAGE_CART) : [];

    function renderCart() {
        $CARRITO.innerHTML = '';
        CART.forEach((element, index) => {
            const $IMG = document.createElement('img');
            const $LI = document.createElement('li');
            const $REMOVE_BUTTON = document.createElement('button');

            $IMG.src = "../assets/iphone15.png";
            $LI.textContent = `${element.modelo} - ${element.capacidad}GB - $${element.precio}`;
            $REMOVE_BUTTON.textContent = 'Eliminar';
            $REMOVE_BUTTON.classList.add('btn', 'btn-danger');
            $REMOVE_BUTTON.addEventListener('click', () => removeItemFromCart(index));

            $CARRITO.appendChild($LI);
            $CARRITO.appendChild($IMG);
            $CARRITO.appendChild($REMOVE_BUTTON);
        });

        updateTotal();
    }

    function updateTotal() {
        const TOTAL_CART_VALUE = CART.reduce((acc, element) => acc + element.precio, 0);
        const $TOTAL = document.getElementById('total');
        $TOTAL.textContent = `Total: $${TOTAL_CART_VALUE}`;
    }

    function removeItemFromCart(index) {
        CART.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(CART));
        renderCart();
    }

    renderCart();

    const $VACIAR_CARRITO = document.getElementById('btnVaciarCarrito');
    $VACIAR_CARRITO.addEventListener('click', () => {
        localStorage.removeItem('cart');
        CART = [];
        renderCart();
    });

    const $METODO_PAGO = document.getElementById('metodoPago');
    const $BTN_METODO_PAGO = document.getElementById('btnMetodoPago');
    $BTN_METODO_PAGO.addEventListener('click', () => {
        const paymentMethods = [
            { name: 'Visa Débito' },
            { name: 'Visa Crédito' },
            { name: 'MasterCard' },
            { name: 'Master Débito' },
            { name: 'Efectivo' }
        ];
        $METODO_PAGO.innerHTML = '<h3>Métodos de Pago</h3>';
        const $SELECT = document.createElement('select');
        $SELECT.id = 'selectMetodoPago';
        paymentMethods.forEach(method => {
            const $OPTION = document.createElement('option');
            $OPTION.value = method.name;
            $OPTION.textContent = method.name;
            $SELECT.appendChild($OPTION);
        });
        $METODO_PAGO.appendChild($SELECT);
    });

    const $COSTO_ENVIO = document.getElementById('costoEnvio');
    const $BTN_ENVIO = document.getElementById('btnEnvio');
    $BTN_ENVIO.addEventListener('click', () => {
        const codigoPostal = document.getElementById('codigoPostal').value;
        const randomShippingCost = (Math.random() * (50 - 10) + 10).toFixed(2); // Random value between 10 and 50
        $COSTO_ENVIO.textContent = `Costo de Envío: $${randomShippingCost}`;
    });

    const $BTN_FINALIZAR_COMPRA = document.getElementById('btnFinalizarCompra');
    $BTN_FINALIZAR_COMPRA.addEventListener('click', () => {
        if (CART.length === 0) {
            Swal.fire({
                title: 'Carrito vacío',
                text: 'No hay nada en el carrito, agrega productos para finalizar',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                background: '#000',
                iconColor: '#ff0000'
            });
        } else {
            Swal.fire({
                title: 'Operación realizada con éxito!',
                text: 'Muchas gracias por tu compra',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                background: '#000',
                iconColor: '#00ff00'
            });
        }
    });
});