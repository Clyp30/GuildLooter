// Admin login system
document.getElementById('admin-access-btn').addEventListener('click', function() {
    const password = prompt('Enter Admin Password:');
    if (password === 'fZKaKprspCrytQuB') { // Replace with your secure password
        document.getElementById('admin-panel').style.display = 'block';
    } else {
        alert('Incorrect password!');
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
            itemList.innerHTML += '<button class="item-btn" data-item="sword">Sword</button>';
            itemList.innerHTML += '<button class="item-btn" data-item="dagger">Dagger</button>';
            itemList.innerHTML += '<button class="item-btn" data-item="crossbow">Crossbow</button>';
            itemList.innerHTML += '<button class="item-btn" data-item="longbow">Longbow</button>';
            itemList.innerHTML += '<button class="item-btn" data-item="staff">Staff</button>';
            itemList.innerHTML += '<button class="item-btn" data-item="wand">Wand</button>';
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
    }
});

// Form submission for user requests
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect data
    const weapons = document.getElementById('weapons').value.split(',').map(item => item.trim());
    const reputation = parseInt(document.getElementById('reputation').value);
    const use = document.getElementById('use').value;

    // Calculate total reputation based on the use selected
    let totalReputation = reputation;
    switch (use) {
        case 'equip':
            totalReputation += 3000;
            break;
        case 'trait':
            totalReputation += 2000;
            break;
        case 'copy':
            totalReputation += 1000;
            break;
        case 'lithograph':
            totalReputation += 500;
            break;
    }

    // Add user request to the ranking list (for demonstration purposes)
    const rankingList = document.getElementById('ranking-list');
    const listItem = document.createElement('li');
    listItem.textContent = `User: ${weapons.join(', ')} | Reputation: ${totalReputation}`;
    rankingList.appendChild(listItem);
});
