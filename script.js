// Admin login system
document.getElementById('admin-access-btn').addEventListener('click', function() {
    // Prompt for password
    const password = prompt('Enter Admin Password:');
    if (password === 'adminpassword') { // Replace with your secure password
        document.getElementById('admin-panel').style.display = 'block'; // Show the admin panel
    } else {
        alert('Incorrect password!'); // Alert on incorrect password
    }
});

// Category button functionality
const categoryButtons = document.querySelectorAll('.category-btn');
const itemList = document.getElementById('item-list');

categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        itemList.innerHTML = ''; // Clear existing items

        // Load items based on category
        if (category === 'weapons') {
            itemList.innerHTML += '<button class="item-btn" data-item="greatsword">Greatsword</button>';
            // Add more weapons as needed
        } else if (category === 'armor') {
            itemList.innerHTML += '<button class="item-btn" data-item="chestplate">Chestplate</button>';
            // Add more armor options as needed
        } else if (category === 'accessories') {
            itemList.innerHTML += '<button class="item-btn" data-item="ring">Ring</button>';
            itemList.innerHTML += '<button class="item-btn" data-item="belt">Belt</button>';
            // Add more accessory options as needed
        }

        itemList.style.display = 'block'; // Show the item list
    });
});

// Item button functionality
itemList.addEventListener('click', function(event) {
    if (event.target.classList.contains('item-btn')) {
        const selectedItem = event.target.getAttribute('data-item');
        const rarityOptions = document.getElementById('rarity-options');

        // Show rarity options
        rarityOptions.style.display = 'block';

        // Populate potential items based on selected rarity
        const itemOptionsList = document.getElementById('item-options-list');
        itemOptionsList.innerHTML = ''; // Clear previous options

        if (selectedItem === 'greatsword') {
            const items = [
                "Morokai's Greatblade of Corruption",
                "Duke Magna's Provoking Warblade",
                "Heroic Bro
