// Function to toggle the collapsible sections
document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Highlight selected build icon (up to two)
const buildIcons = document.querySelectorAll('.build-icon');
const submitBuildButton = document.getElementById('submit-build');

let selectedBuilds = [];

buildIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        if (selectedBuilds.includes(this.dataset.build)) {
            this.classList.remove('selected');
            selectedBuilds = selectedBuilds.filter(build => build !== this.dataset.build);
        } else if (selectedBuilds.length < 2) {
            this.classList.add('selected');
            selectedBuilds.push(this.dataset.build);
        }

        // Disable or enable the submit button based on selection
        if (selectedBuilds.length > 0) {
            submitBuildButton.disabled = false;
        } else {
            submitBuildButton.disabled = true;
        }
    });
});

// Admin login functionality
document.getElementById('admin-login').addEventListener('click', function () {
    const password = prompt('Enter admin password:');
    if (password === 'adminpassword') { // Update with your actual password
        document.getElementById('admin-panel').classList.remove('hidden');
    } else {
        alert('Incorrect password');
    }
});

// Admin panel close button
document.getElementById('close-admin-panel').addEventListener('click', function () {
    document.getElementById('admin-panel').classList.add('hidden');
});

// Additional JavaScript to handle requests, item listings, and real-time requests will go here
// ...
