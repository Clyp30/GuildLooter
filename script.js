document.addEventListener('DOMContentLoaded', () => {
    const adminLoginBtn = document.getElementById('admin-login');
    const adminPanel = document.getElementById('admin-panel');
    const closeAdminBtn = document.getElementById('close-admin');
    const collapseBar = document.getElementById('collapse-bar');
    const itemsContent = document.getElementById('items-content');
    const filterWeaponBtn = document.getElementById('filter-weapon');
    const filterArmorBtn = document.getElementById('filter-armor');
    const filterAccessoryBtn = document.getElementById('filter-accessory');
    const buildIcons = document.querySelectorAll('.build-icon');
    let selectedBuilds = [];
    let adminLoggedIn = false;

    // Admin Login System
    adminLoginBtn.addEventListener('click', () => {
        if (!adminLoggedIn) {
            const password = prompt('Enter Admin Password:');
            if (password === 'admin123') {
                adminLoggedIn = true;
                adminPanel.classList.remove('hidden');
            } else {
                alert('Incorrect Password');
            }
        } else {
            adminPanel.classList.remove('hidden');
        }
    });

    // Close Admin Panel
    closeAdminBtn.addEventListener('click', () => {
        adminPanel.classList.add('hidden');
    });

    // Collapsible Items Listed Bar
    collapseBar.addEventListener('click', () => {
        itemsContent.classList.toggle('collapse');
    });

    // Build Icons Selection
    buildIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            if (selectedBuilds.length < 2 || icon.classList.contains('selected')) {
                icon.classList.toggle('selected');
                if (icon.classList.contains('selected')) {
                    selectedBuilds.push(icon.alt);
                } else {
                    selectedBuilds = selectedBuilds.filter(build => build !== icon.alt);
                }
            } else {
                alert('You can only select up to 2 builds.');
            }
        });
    });

    // Admin Panel Item Sorting
    filterWeaponBtn.addEventListener('click', () => {
        displayItemsByType('weapon');
    });

    filterArmorBtn.addEventListener('click', () => {
        displayItemsByType('armor');
    });

    filterAccessoryBtn.addEventListener('click', () => {
        displayItemsByType('accessory');
    });

    // Function to display items based on type
    function displayItemsByType(type) {
        let sortedItems = [];
        switch (type) {
            case 'weapon':
                sortedItems = ['Sword', 'Dagger', 'Staff', 'Shield', 'Greatsword'];
                break;
            case 'armor':
                sortedItems = ['Helmet', 'Chestplate', 'Gloves', 'Boots'];
                break;
            case 'accessory':
                sortedItems = ['Ring', 'Belt', 'Amulet'];
                break;
        }
        const sortedItemsContainer = document.getElementById('sorted-items');
        sortedItemsContainer.innerHTML = sortedItems.map(item => `<p>${item}</p>`).join('');
    }

    // Example of listing items (to be dynamically done in real usage)
    const itemList = [
        'Sword of Power',
        'Greatsword of Destruction',
        'Amulet of the Sun'
    ];

    itemsContent.innerHTML = itemList.map(item => `<p>${item}</p>`).join('');

});
