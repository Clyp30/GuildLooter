document.addEventListener('DOMContentLoaded', function () {
    const adminLogin = document.getElementById('admin-login');
    const adminPanel = document.getElementById('admin-panel');
    const weaponBtn = document.getElementById('weapon-btn');
    const armorBtn = document.getElementById('armor-btn');
    const accessoriesBtn = document.getElementById('accessories-btn');
    const weaponOptions = document.getElementById('weapon-options');
    const itemDetails = document.getElementById('item-details');
    const collapsibleBar = document.getElementById('items-listed-bar');
    const itemsListContent = document.getElementById('items-list-content');
    const buildIcons = document.querySelectorAll('.build-icon');
    const submitBuild = document.getElementById('submit-build');
    let selectedBuild = [];
    let itemSelected = false;

    // Admin login
    adminLogin.addEventListener('click', function () {
        const password = prompt("Enter admin password:");
        if (password === 'admin123') {
            adminPanel.style.display = 'block';
        } else {
            alert('Incorrect password!');
        }
    });

    // Close admin panel
    document.querySelector('.close-admin-panel').addEventListener('click', function () {
        adminPanel.style.display = 'none';
    });

    // Collapsible "Items Listed" bar
    collapsibleBar.addEventListener('click', function () {
        this.classList.toggle('active');
        itemsListContent.classList.toggle('active');
    });

    // Enable submitting build after selecting an item
    function checkBuildAndItem() {
        if (selectedBuild.length > 0 && itemSelected) {
            submitBuild.classList.add('active');
            submitBuild.disabled = false;
        }
    }

    // Build icon selection
    buildIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            if (selectedBuild.includes(this.dataset.build)) {
                selectedBuild = selectedBuild.filter(b => b !== this.dataset.build);
                this.classList.remove('selected');
            } else if (selectedBuild.length < 2) {
                selectedBuild.push(this.dataset.build);
                this.classList.add('selected');
            }
            checkBuildAndItem();
        });
    });

    // Show weapon options on admin panel
    weaponBtn.addEventListener('click', function () {
        weaponOptions.classList.toggle('hidden');
        armorBtn.style.display = 'none';
        accessoriesBtn.style.display = 'none';
    });

    // Add real-time request
    function addRequest(inGameName, reputation, build) {
        const requestDiv = document.createElement('div');
        requestDiv.innerHTML = `
            <p>In-Game Name: ${inGameName}</p>
            <p>Re
