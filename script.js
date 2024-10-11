document.addEventListener('DOMContentLoaded', function () {
    // Admin login functionality
    const adminLoginBtn = document.getElementById('admin-login-btn');
    const adminPanel = document.getElementById('admin-panel');
    const closeAdminBtn = document.getElementById('close-admin-btn');
    const password = 'admin123'; // Set your admin password here

    adminLoginBtn.addEventListener('click', function () {
        const enteredPassword = prompt('Enter Admin Password:');
        if (enteredPassword === password) {
            adminPanel.style.display = 'block';
        } else {
            alert('Incorrect password.');
        }
    });

    closeAdminBtn.addEventListener('click', function () {
        adminPanel.style.display = 'none';
    });

    // Collapsible functionality for listed items
    const collapsible = document.getElementsByClassName('collapsible');
    for (let i = 0; i < collapsible.length; i++) {
        collapsible[i].addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    }

    // Adding more functionality to dynamically list items and requests in real-time
    const itemList = [
        "Morokai's Greatblade of Corruption",
        "Duke Magna's Provoking Warblade",
        "Heroic Broadsword of the Resistance",
        "Greatsword of the Banshee",
        "Adentus's Gargantuan Greatsword",
        "Junobote's Juggernaut Warblade",
        "Tevent's Warblade of Despair"
    ];

    const itemContainer = document.getElementById('item-list');
    const rarityOptions = document.getElementById('rarity-options');

    // Dynamically add items when category (weapon, armor, accessory) is selected
    const weaponsBtn = document.getElementById('weapons-btn');
    const armorBtn = document.getElementById('armor-btn');
    const accessoriesBtn = document.getElementById('accessories-btn');

    weaponsBtn.addEventListener('click', function () {
        itemContainer.innerHTML = ''; // Clear previous items
        rarityOptions.innerHTML = ''; // Clear previous rarity options

        itemList.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = item;
            itemElement.classList.add('item-entry');
            itemContainer.appendChild(itemElement);
        });

        const rareOption = document.createElement('button');
        rareOption.innerHTML = 'Rare (Blue)';
        rareOption.classList.add('rarity-btn');

        const epicOption = document.createElement('button');
        epicOption.innerHTML = 'Epic (Purple)';
        epicOption.classList.add('rarity-btn');

        rarityOptions.appendChild(rareOption);
        rarityOptions.appendChild(epicOption);
        itemContainer.style.display = 'block';
        rarityOptions.style.display = 'block';
    });

    armorBtn.addEventListener('click', function () {
        itemContainer.innerHTML = ''; // Clear previous items
        rarityOptions.innerHTML = ''; // Clear previous rarity options
        // Example armor items can be added here
        const armorItems = ['Generic Armor 1', 'Generic Armor 2', 'Generic Armor 3'];
        armorItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = item;
            itemElement.classList.add('item-entry');
            itemContainer.appendChild(itemElement);
        });
        rarityOptions.style.display = 'none';
    });

    accessoriesBtn.addEventListener('click', function () {
        itemContainer.innerHTML = ''; // Clear previous items
        rarityOptions.innerHTML = ''; // Clear previous rarity options
        // Example accessory items can be added here
        const accessoryItems = ['Ring', 'Belt'];
        accessoryItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = item;
            itemElement.classList.add('item-entry');
            itemContainer.appendChild(itemElement);
        });
        rarityOptions.style.display = 'none';
    });

    // Example function to handle form submission (user request submission)
    const userForm = document.getElementById('user-form');
    userForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const inGameName = document.getElementById('ingame-name').value;
        const reputation = parseInt(document.getElementById('reputation').value, 10);
        const usage = document.getElementById('usage').value;

        let additionalRep = 0;
        if (usage === 'equip') additionalRep = 3000;
        else if (usage === 'trait') additionalRep = 2000;
        else if (usage === 'copy') additionalRep = 1000;
        else if (usage === 'lithograph') additionalRep = 500;

        const totalReputation = reputation + additionalRep;

        // Dynamically add request to real-time request list
        const requestDiv = document.createElement('div');
        requestDiv.classList.add('request-list');
        requestDiv.innerHTML = `
            <p>In-game Name: <span class="user-name">${inGameName}</span></p>
            <p>Reputation: <span class="user-reputation">${totalReputation}</span></p>
            <p>Build: <span class="user-build">Greatsword</span></p>
        `;
        document.querySelector('.collapsible-content').appendChild(requestDiv);
    });
});
