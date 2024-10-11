document.addEventListener('DOMContentLoaded', function () {
    const adminLoginButton = document.getElementById('admin-login');
    const adminPanel = document.getElementById('admin-panel');
    const escButton = document.getElementById('esc-button');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const subtypeFilters = document.getElementById('subtype-filters');
    const listBtn = document.getElementById('list-item-btn');
    const collapsibleBtn = document.querySelector('.collapsible-btn');
    const itemsListedContent = document.querySelector('#items-listed .content');
    let isAdminLoggedIn = false;

    // Admin login functionality
    adminLoginButton.addEventListener('click', function () {
        if (!isAdminLoggedIn) {
            const password = prompt('Enter Admin Password:');
            if (password === 'admin123') { // Change this password to whatever you want
                isAdminLoggedIn = true;
                adminPanel.classList.remove('hidden');
                alert('Welcome Admin!');
            } else {
                alert('Incorrect Password');
            }
        } else {
            adminPanel.classList.toggle('hidden');
        }
    });

    // ESC button to close admin panel
    escButton.addEventListener('click', function () {
        adminPanel.classList.add('hidden');
    });

    // Category buttons for admin panel
    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            const type = this.getAttribute('data-type');
            showSubtypeFilters(type);
        });
    });

    // Show subtype filters based on selected category
    function showSubtypeFilters(type) {
        subtypeFilters.innerHTML = ''; // Clear previous filters
        subtypeFilters.classList.remove('hidden');
        
        const weaponSubtypes = ['Staff', 'Daggers', 'Xbox', 'Longbow', 'Wand', 'Greatsword', 'Shield', 'Sword'];
        const armorSubtypes = ['Chest', 'Helmet', 'Boots', 'Gloves'];
        const accessorySubtypes = ['Ring', 'Belt'];

        let subtypes = [];
        if (type === 'weapon') {
            subtypes = weaponSubtypes;
        } else if (type === 'armor') {
            subtypes = armorSubtypes;
        } else if (type === 'accessory') {
            subtypes = accessorySubtypes;
        }

        subtypes.forEach(subtype => {
            const btn = document.createElement('button');
            btn.textContent = subtype;
            subtypeFilters.appendChild(btn);

            // Event listener for subtype button
            btn.addEventListener('click', function () {
                document.getElementById('item-details').classList.remove('hidden');
            });
        });
    }

    // List item button
    listBtn.addEventListener('click', function () {
        const itemName = document.getElementById('item-name').value;
        const itemTrait = document.getElementById('item-trait').value;
        if (itemName) {
            const item = document.createElement('div');
            item.textContent = `${itemName} (${itemTrait})`;
            itemsListedContent.appendChild(item);
        }
    });

    // Collapsible bar for items listed
    collapsibleBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
