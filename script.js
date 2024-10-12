// Admin Login Functionality
const adminLoginButton = document.getElementById('admin-login');
const adminLoginForm = document.getElementById('admin-login-form');
const submitPasswordButton = document.getElementById('submit-password');
const adminPanel = document.getElementById('admin-panel');
const userPanel = document.getElementById('user-panel');
const itemsList = document.getElementById('items-list');
const adminPasswordInput = document.getElementById('admin-password');
const adminLogoutButton = document.getElementById('logout-admin');

let isAdmin = false;

adminLoginButton.addEventListener('click', () => {
    adminLoginForm.style.display = 'block';
});

submitPasswordButton.addEventListener('click', () => {
    const password = adminPasswordInput.value;
    if (password === 'yourpassword') {
        isAdmin = true;
        adminLoginForm.style.display = 'none';
        adminPanel.style.display = 'block';
        userPanel.style.display = 'none';
        itemsList.style.display = 'none';
    } else {
        alert('Incorrect password');
    }
});

adminLogoutButton.addEventListener('click', () => {
    isAdmin = false;
    adminPanel.style.display = 'none';
    userPanel.style.display = 'block';
    itemsList.style.display = 'block';
});

// Handle Build Selection
const buildIcons = document.querySelectorAll('.build-icon');
let selectedBuild = [];

buildIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        if (selectedBuild.length < 2) {
            selectedBuild.push(icon.id);
            icon.classList.add('selected');
        } else {
            alert('Only 2 weapons of choice allowed');
        }
    });
});

// Submit Request Button Control
const submitRequestButton = document.getElementById('submit-request');
const itemsContainer = document.getElementById('items-container');

itemsContainer.addEventListener('click', () => {
    submitRequestButton.disabled = false;
});

// Dynamically Populate Items Listed by Admin
const adminItemsList = document.getElementById('items-list-admin');
const itemsListedContainer = document.getElementById('items-container');

const items = [];

function addItem(name, type) {
    const itemElement = document.createElement('div');
    itemElement.textContent = `${type}: ${name}`;
    items.push(itemElement);
    itemsListedContainer.appendChild(itemElement);
}

// Example: Add items (this will be dynamic in the real implementation)
addItem('Greatsword of Power', 'Weapon');
addItem('Shield of Valor', 'Armor');

// Admin Panel: Display Requests
const requestsList = document.getElementById('requests-list');
const requests = [];

function addRequest(name, build, usage, rarity) {
    const requestElement = document.createElement('div');
    requestElement.textContent = `${name} | ${build} | ${usage} | ${rarity}`;
    requests.push(requestElement);
    requestsList.appendChild(requestElement);
}

// Example: Add requests (this will be dynamic in the real implementation)
addRequest('Player1', 'Greatsword', 'Equip', 'Rare');
addRequest('Player2', 'Shield', 'Copy', 'Epic');
