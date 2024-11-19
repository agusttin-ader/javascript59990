document.addEventListener('DOMContentLoaded', () => {
    fetch('../data/iphone-models.json')
        .then(response => response.json())
        .then(data => {
            const IPHONE_MODELS = data;
            const $CAPACIDAD_QUINCE_PRO = document.getElementById('selectIphonePro');
            const $COMPRAR_QUINCE_PRO = document.getElementById('compraQuincePro');
            const $CANTIDAD_QUINCE_PRO = document.getElementById('cantidadIphonePro');
            let selectedIphonePro = IPHONE_MODELS[0];
            const CART = [];

            $CAPACIDAD_QUINCE_PRO.addEventListener('change', () => {
                const selectedOption = $CAPACIDAD_QUINCE_PRO.options[$CAPACIDAD_QUINCE_PRO.selectedIndex];
                selectedIphonePro = IPHONE_MODELS.find(
                    (iphone) => iphone.id === parseInt(selectedOption.value)
                );
            });

            $COMPRAR_QUINCE_PRO.addEventListener('click', () => {
                const cantidad = parseInt($CANTIDAD_QUINCE_PRO.value);
                for (let i = 0; i < cantidad; i++) {
                    CART.push(selectedIphonePro);
                }
                localStorage.setItem('cart', JSON.stringify(CART));
                Toastify({
                    text: `Agregaste ${cantidad} ${selectedIphonePro.modelo}(s) de ${selectedIphonePro.capacidad}GB a tu carrito`,
                    duration: 3000,
                    backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)'
                }).showToast();
            });
        })
        .catch(error => console.error('Error fetching iPhone models:', error));
});