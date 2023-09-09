document.addEventListener('DOMContentLoaded', function () {
    const addToCartLinks = document.querySelectorAll('.add-to-cart');

    // Función para agregar un artículo al carrito
    function addToCart(itemName, itemPrice) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (!Array.isArray(cart)) {//no se si funciona...  no tocar
            cart = []; 
        }
        cart.push({ name: itemName, price: itemPrice });
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Actualizar el contador de carrito en la barra de navegación
    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        document.getElementById('cart-count').textContent = cart.length;
    }

    // Manejar clic en enlaces de Agregar al carrito
    addToCartLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const itemName = link.dataset.itemName;
            const itemPrice = parseFloat(link.dataset.itemPrice);
            addToCart(itemName, itemPrice);
            updateCartCount();
        });
    });

    // Actualizar el contador de carrito al cargar la página
    updateCartCount();
});