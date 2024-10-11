document.getElementById('admin-login').addEventListener('click', function() {
    let password = prompt("Enter Admin Password:");
    if (password === "admin123") {
        document.getElementById('admin-panel').classList.remove('hidden');
        sessionStorage.setItem('adminAuthenticated', true);
    } else {
        alert('Incorrect password.');
    }
});

if (sessionStorage.getItem('adminAuthenticated')) {
    document.getElementById('admin-panel').classList.remove('hidden');
}

document.getElementById('admin-close').addEventListener('click', function() {
    document.getElementById('admin-panel').classList.add('hidden');
});

document.getElementById('weapon-btn').addEventListener('click', function() {
    showSubtypes(['Staff', 'Daggers', 'Xbox', 'Longbow', 'Wand', 'Greatsword', 'Shield', 'Sword']);
});

document.getElementById('armor-btn').addEventListener('click', function() {
    showSubtypes(['Helmet', 'Chestplate', 'Gauntlets', 'Leggings', 'Boots']);
});

document.getElementById('accessory-btn').addEventListener('click', function() {
    showSubtypes(['Ring', 'Belt', 'Amulet']);
});

function showSubtypes(subtypes) {
    let itemSelection = document.getElementById('item-selection');
    itemSelection.innerHTML = '';
    subtypes.forEach(function(subtype) {
        let button = document.createElement('button');
        button.textContent = subtype;
        button.classList.add('subtype-button');
        button.addEventListener('click', function() {
            listItems(subtype);
        });
        itemSelection.appendChild(button);
    });
}

function listItems(subtype) {
    let items = [];
    switch (subtype) {
        case 'Greatsword':
            items = ['Morokai\'s Greatblade', 'Duke Magna\'s Warblade', 'Heroic Broadsword'];
            break;
        // Add more cases for other subtypes.
    }
    let itemSelection = document.getElementById('item-selection');
    itemSelection.innerHTML = '';
    items.forEach(function(item) {
        let div = document.createElement('div');
        div.textContent = item;
        itemSelection.appendChild(div);
    });
}

// Collapsible functionality for Items Listed
let collapsibleBtn = document.querySelector('.collapsible-btn');
let collapsibleContent = document.querySelector('.collapsible-content');

collapsibleBtn.addEventListener('click', function() {
    collapsibleContent.classList.toggle('active');
});
