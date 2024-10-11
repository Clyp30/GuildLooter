// Admin login and panel toggle
const adminLoginButton = document.getElementById('admin-login');
const adminPanel = document.querySelector('.admin-panel');
const closeAdminButton = document.getElementById('close-admin');

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

// Dynamically list items in the gold highlighted section
const itemsContent = document.getElementById('items-content');

function listItem(type, subtype, name) {
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.textContent = `${type} > ${subtype} > ${name}`;
    itemsContent.appendChild(itemDiv);
}

// Add alternating colors for items and Diablo 2 inspired hover effect
const requestsContent = document.getElementById('requests-content');

// Handle request submission and countdown
function submitRequest(item, username, usage) {
    const requestDiv = document.createElement('div');
    requestDiv.classList.add('request');
    const timestamp = new Date();
    requestDiv.innerHTML = `
        <p>Request for ${item} by ${username} (Usage: ${usage})</p>
        <p>Time: ${timestamp.toLocaleTimeString()}</p>
        <button class="accept-request">Accept</button>
        <button class="deny-request">Deny</button>
        <div class="countdown-timer" data-time="${timestamp.getTime()}"></div>
    `;
    requestsContent.appendChild(requestDiv);

    // Start countdown (12 hours)
    const countdownTimer = requestDiv.querySelector('.countdown-timer');
    startCountdown(countdownTimer, 12 * 60 * 60 * 1000); // 12 hours in ms
}

// Countdown function
function startCountdown(timerElement, countdownTime) {
    const interval = setInterval(() => {
        const currentTime = new Date().getTime();
        const timeDifference = countdownTime - (currentTime - timerElement.dataset.time);
        if (timeDifference <= 0) {
            clearInterval(interval);
            timerElement.textContent = "Request Expired";
        } else {
            const hours = Math.floor(timeDifference / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            timerElement.textContent = `Time Left: ${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
}

// Admin accepts/denies requests
requestsContent.addEventListener('click', (e) => {
    if (e.target.classList.contains('accept-request')) {
        alert('Request Accepted');
        e.target.closest('.request').remove();
    }
    if (e.target.classList.contains('deny-request')) {
        alert('Request Denied');
        e.target.closest('.request').remove();
    }
});
