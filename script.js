// Admin login system
document.getElementById('admin-access-btn').addEventListener('click', function() {
    const password = prompt('Enter Admin Password:');
    if (password === 'adminpassword') { // Replace with your secure password
        document.getElementById('admin-panel').style.display = 'block'; // Show the admin panel
    } else {
        alert('Incorrect password!');
    }
});

// Close admin panel
document.getElementById('close-admin-panel').addEventListener('click', function() {
    document.getElementById('admin-panel').style.display = 'none'; // Hide admin panel
});

// Category button functionality
const categoryButtons = document.querySelectorAll('.category-btn');
const itemList = document.getElementById('item-list');

categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        itemList.innerHTML = ''; // Clear existing items

        if (category === 'weapons') {
            itemList.innerHTML += '<button class="item-btn" data-item="greatsword">Greatsword</button>';
            // Add more weapons as needed
        } else if (category === 'armor') {
            itemList.innerHTML += '<button class="item-btn" data-item="chestplate">Chestplate</button>';
            // Add more armor options as needed
        } else if (category === 'accessories') {
            itemList.innerHTML += '<button class
