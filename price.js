
    // Function to update the cart display and the address textarea
    function updateCartAndAddress() {
        // Update cart display
        const cartList = document.getElementById('cart-items');
        const totalElement = document.getElementById('total');
        let total = 0;

        // Get cart items from localStorage
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Clear previous items in the cart
        cartList.innerHTML = '';

        // Add each item to the cart list
        cartItems.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - GH₵ ${item.price}`;
            cartList.appendChild(listItem);
            total += parseFloat(item.price);

            // Add delete button for each item
            const deleteButton = document.createElement('button');
            deleteButton.style.backgroundColor = 'red';
            deleteButton.style.padding = '15px 45px' ;
            deleteButton.style.marginLeft = '15%';
            deleteButton.style.color = '#ffffff';
            deleteButton.style.border = 'none'
            deleteButton.textContent = 'Delete Order';
            deleteButton.addEventListener('click', () => {
                deleteSingleItem(index);
            });
            listItem.appendChild(deleteButton);
        });

        // Update total price
        totalElement.textContent = `Total: GH₵ ${total.toFixed(2)}`;

        // Update address textarea
        const addressTextarea = document.getElementById('address-textarea');
        const addressText = cartItems.map(item => `${item.name} - GH₵ ${item.price}`).join('\n');
        addressTextarea.value = addressText;
    }

    // Call updateCartAndAddress() to initially display cart items and address on page load
    updateCartAndAddress();

    // Function to delete all items from the cart
    function deleteAllItems() {
        localStorage.removeItem('cart');
        updateCartAndAddress();
    }

    // Function to delete a single item from the cart
    function deleteSingleItem(itemIndex) {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.splice(itemIndex, 1);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        updateCartAndAddress();
    }

    // Function to place the order and clear the cart and address textarea
    function placeOrder() {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        // You can add logic here to process the order and handle the delivery address as needed.
        // For simplicity, this example will just clear the cart and the address textarea.
        localStorage.removeItem('cart');
        updateCartAndAddress();
        const addressTextarea = document.getElementById('address-textarea');
        addressTextarea.value = '';
        alert('Order placed successfully! Thank you for your order.');
    }

    // Attach event listeners
    const deleteAllBtn = document.getElementById('delete-all-btn');
    deleteAllBtn.addEventListener('click', deleteAllItems);

    const placeOrderBtn = document.getElementById('place-order-btn');
    placeOrderBtn.addEventListener('click', placeOrder);
