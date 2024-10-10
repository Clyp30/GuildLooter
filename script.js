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

// Close Admin Panel
document.getElementById('close-admin-panel').addEventListener('click', function() {
    document.getElementById('admin-panel').style.display = 'none'; // Hide the admin panel
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
                "Heroic Broadsword of the Resistance",
                "Greatsword of the Banshee",
                "Adentus's Gargantuan Greatsword",
                "Junobote's Juggernaut Warblade",
                "Tevent's Warblade of Despair"
            ];

            items.forEach(item => {
                itemOptionsList.innerHTML += `<li>${item}</li>`; // Add items to the list
            });
            document.getElementById('potential-items').style.display = 'block'; // Show potential items
        }
    }
});

// Build selection functionality
const buildIcons = document.querySelectorAll('.build-icon');
buildIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        const selectedBuild = this.getAttribute('data-build');
        alert(`Selected Build: ${selectedBuild}`);
    });
});

// User form submission and ranking
document.getElementById('user-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const reputation = document.getElementById('reputation').value;

    // Add to the ranking list
    const rankingList = document.getElementById('ranking-list');
    rankingList.innerHTML += `<li>${username} - Reputation: ${reputation}</li>`;

    // Clear form fields
    this.reset();
});

// Countdown timer functionality
let countdownTime = 12 * 60 * 60; // 12 hours in seconds
const timerDisplay = document.getElementById('timer');
const countdownDiv = document.getElementById('countdown');

setInterval(() => {
    if (countdownTime <= 0) {
        clearInterval();
        alert("Time's up! Selecting user with the highest reputation.");
        // Logic to select the user with the highest reputation would go here
    } else {
        const hours = Math.floor(countdownTime / 3600);
        const minutes = Math.floor((countdownTime % 3600) / 60);
        const seconds = countdownTime % 60;

        timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        countdownTime--;
    }
}, 1000);
