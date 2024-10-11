document.getElementById('admin-login-btn').addEventListener('click', function () {
    const password = prompt('Enter admin password:');
    if (password === 'admin123') {
        document.getElementById('admin-panel').classList.remove('hidden');
    } else {
        alert('Incorrect password!');
    }
});

document.getElementById('close-admin-panel').addEventListener('click', function () {
    document.getElementById('admin-panel').classList.add('hidden');
});

document.getElementById('weapon-btn').addEventListener('click', function () {
    showSubtypes('weapon');
});

document.getElementById('armor-btn').addEventListener('click', function () {
    showSubtypes('armor');
});

document.getElementById('accessory-btn').addEventListener('click', function () {
    showSubtypes('accessory');
});

function showSubtypes(type) {
    const subtypesContainer = document.getElementById('subtypes-container');
    subtypesContainer.classList.remove('hidden');
    let subtypes = [];
    if (type === 'weapon') {
        subtypes = ['Staff', 'Daggers', 'Xbox', 'Longbow', 'Wand', 'Greatsword', 'Shield', 'Sword'];
    } else if (type === 'armor') {
        subtypes = ['Helmet', 'Chestplate', 'Gauntlets', 'Boots'];
    } else if (type === 'accessory') {
        subtypes = ['Ring', 'Belt', 'Necklace'];
    }

    subtypesContainer.innerHTML = '';
    subtypes.forEach(subtype => {
        const btn = document.createElement('button');
        btn.innerText = subtype;
        subtypesContainer.appendChild(btn);
    });
}

document.getElementById('collapse-items-btn').addEventListener('click', function () {
    const content = document.getElementById('item-list-content');
    content.classList.toggle('hidden');
});

document.getElementById('build-icons').addEventListener('click', function (event) {
    if (event.target.classList.contains('build-icon')) {
        event.target.classList.toggle('selected');
    }
});

// The rest of the code for managing listing requests and item countdown timers
