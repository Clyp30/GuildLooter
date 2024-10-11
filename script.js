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
    const collapsibleSection = document.querySelector('.collapsible-section');

    function addCollapsibleItem(itemName) {
        const collapsible = document.createElement('button');
        collapsible.classList.add('collapsible');
        collapsible.innerText = itemName;

        const collapsibleContent = document.createElement('div');
        collapsibleContent.classList.add('collapsible-content');
        collapsibleContent.innerHTML = '<p>No requests yet.</p>';

        collapsibleSection.appendChild(collapsible);
        collapsibleSection.appendChild(collapsibleContent);

        collapsible.addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    }

    // Dynamic item adding by admin
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

    const weaponsBtn = document.getElementById('weapons-btn');
    weaponsBtn.addEventListener('click', function () {
        itemContainer.innerHTML = '';
        rarityOptions.innerHTML = '';
        itemList.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = item;
            itemElement.classList.add('item-entry');
            itemContainer.appendChild(itemElement);
            addCollapsibleItem(item);
        });
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

        const buildIcon = document.querySelector('.build-icon.selected');
        const build = buildIcon ? buildIcon.getAttribute('data-build') : 'Unknown';

        const requestDiv = document.createElement('div');
        requestDiv.classList.add('request-list');
        requestDiv.innerHTML = `
            <p>In-game Name: ${inGameName}</p>
            <p>Reputation: ${totalReputation}</p>
            <p>Build: ${build}</p>
        `;

        // Add to the respective item's collapsible content
        const selectedItemContent = document.querySelector('.collapsible.active + .collapsible-content');
        if (selectedItemContent) {
            selectedItemContent.innerHTML = ''; // Clear existing text
            selectedItemContent.appendChild(requestDiv);
        }
    });

    // Handle build icon selection
    const buildIcons = document.querySelectorAll('.build-icon');
    buildIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            buildIcons.forEach(icon => icon.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});
