document.getElementById('collapse-items-btn').addEventListener('click', function () {
    const content = document.getElementById('item-list-content');
    content.classList.toggle('hidden');
});

const selectedBuilds = [];
document.getElementById('build-icons').addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('build-icon')) {
        const buildName = target.getAttribute('data-build');
        if (selectedBuilds.includes(buildName)) {
            target.classList.remove('selected');
            selectedBuilds.splice(selectedBuilds.indexOf(buildName), 1);
        } else if (selectedBuilds.length < 2) {
            target.classList.add('selected');
            selectedBuilds.push(buildName);
        } else {
            alert("Only 2 weapons of choice allowed.");
        }
    }

    // Enable the submit button if 2 builds are selected
    const submitButton = document.getElementById('submit-build');
    if (selectedBuilds.length === 2) {
        submitButton.classList.remove('disabled');
        submitButton.disabled = false;
    } else {
        submitButton.classList.add('disabled');
        submitButton.disabled = true;
    }
});

// Implementing rules for item requests (rarity limitations per day)
const userLimits = {
    rare: 2,
    purple: 1
};

function resetDailyLimits() {
    userLimits.rare = 2;
    userLimits.purple = 1;
}

setInterval(resetDailyLimits, 24 * 60 * 60 * 1000); // Reset daily limits every 24 hours
