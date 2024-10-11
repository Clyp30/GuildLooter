// Open and Close Admin Panel
const adminLoginButton = document.getElementById('admin-login');
const adminPanel = document.querySelector('.admin-panel');
const closeAdminButton = document.getElementById('close-admin');
const collapsibleItemsListed = document.getElementById('collapsible-items-listed');
const itemsContent = document.getElementById('items-content');

adminLoginButton.addEventListener('click', () => {
    let password = prompt("Enter Admin Password:");
    if (password === 'admin123') {
        adminPanel.style.display = 'flex';
    } else {
        alert("Incorrect Password!");
    }
});

closeAdminButton.addEventListener('click', () => {
    adminPanel.style.display = 'none';
});

// Collapsible items listed
collapsibleItemsListed.addEventListener('click', () => {
    collapsibleItemsListed.classList.toggle('active');
    itemsContent.classList.toggle('active');
});

// Build selection
const buildIcons = document.querySelectorAll('.build-icon');
let selectedBuilds = [];

buildIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        if (selectedBuilds.includes(icon.id)) {
            icon.classList.remove('selected');
            selectedBuilds = selectedBuilds.filter(build => build !== icon.id);
        } else if (selectedBuilds.length < 2) {
            icon.classList.add('selected');
            selectedBuilds.push(icon.id);
        } else {
            alert('Only 2 weapons of choice allowed.');
        }
    });
});

// Example item listing function for admin
function listItem(type, subtype, name) {
    let itemDiv = document.createElement('div');
    itemDiv.textContent = `${type} > ${subtype} > ${name}`;
    itemsContent.appendChild(itemDiv);
}
