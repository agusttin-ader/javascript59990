const IPHONE_MODELS = [
    {   id: 1,
        modelo: 'iPhone 15 Pro',
        capacidad: 128,
        precio: 989
    },
    {
        id:2,
        modelo: 'iPhone 15 Pro',
        capacidad: 256,
        precio: 1099
    },
    {
        id:3,
        modelo: 'iPhone 15 Pro',
        capacidad: 512,
        precio: 1199
    }
];

const $CAPACIDAD_QUINCE_PRO = document.getElementById('selectIphonePro');
const $COMPRAR_QUINCE_PRO = document.getElementById('compraQuincePro');
let selectedIphonePro = IPHONE_MODELS [0];
const CART = [];

$CAPACIDAD_QUINCE_PRO.addEventListener('click', () => {
    const selectedOption = 
    $CAPACIDAD_QUINCE_PRO.options[$CAPACIDAD_QUINCE_PRO.selectedIndex];
    
    selectedIphonePro = IPHONE_MODELS.find(
        (iphone)=> iphone.id === parseInt(selectedOption.id)
    );
});

$COMPRAR_QUINCE_PRO.addEventListener('click', () => {
    CART.push(selectedIphonePro);

    localStorage.setItem('cart', JSON.stringify(CART));
});
