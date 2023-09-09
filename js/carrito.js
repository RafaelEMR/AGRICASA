document.addEventListener('DOMContentLoaded', function () {
    const cartTable = document.getElementById('cart-table');
    const cartGrandTotal = document.getElementById('cart-grand-total');
    const cartTax = document.getElementById('cart-tax');
    const clearCartButton = document.getElementById('clear-cart-button');
    const alertButtonCart = document.getElementById('alertCart');

    // Obtener los productos del almacenamiento local
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Mostrar los productos en la tabla del carrito
    function displayCartItems() {
        cartTable.innerHTML = '';
        let total = 0;
        cart.forEach(function (item, index) {
            const tableRow = document.createElement('tr');
            tableRow.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>1</td>
                <td>Lps.${item.price.toFixed(2)}</td>
            `;
            cartTable.appendChild(tableRow);

            total += item.price;
        });
        const tax = total * 0.125; // 12.5% de impuesto
        const grandTotal = total + tax;

        cartGrandTotal.textContent = `Lps.${grandTotal.toFixed(2)}`;
        cartTax.textContent = `Lps.${tax.toFixed(2)}`;
    }

    displayCartItems();
    clearCartButton.addEventListener('click', function () {
        localStorage.removeItem('cart');
        cart.length = 0;
        displayCartItems();
        updateCartCount();
    });

    function updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartCount.textContent = cart.length;
    }
    updateCartCount();
    alertButtonCart.addEventListener('click', function () {
        if (cart == 0) {
            alert('Tienes que agregar productos!!!');
        } else {
            alert('Gracias por comprar en Agricasa!!!');
            localStorage.removeItem('cart');
            cart.length = 0;
            displayCartItems();
            updateCartCount();
        }
    });
});