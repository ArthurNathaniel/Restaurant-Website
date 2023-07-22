





    // Function to add an item to the cart in localStorage
    function addToCart(name, price) {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.push({ name, price });
        localStorage.setItem('cart', JSON.stringify(cartItems));
        alert(`${name} has been added to your cart successfully!`);
        
    }

    // Add event listeners to "Order Now" buttons
    const orderButtons = document.querySelectorAll('.order-menu');
    orderButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const itemName = this.getAttribute('data-name');
            const itemPrice = this.getAttribute('data-price');
            addToCart(itemName, itemPrice);
        });
    });
