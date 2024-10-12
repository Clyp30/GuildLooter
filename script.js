// Admin login functionality
document.getElementById("adminLoginButton").addEventListener("click", function() {
    const password = prompt("Enter the admin password:");
    if (password === 'admin123') {  // Change 'admin123' to whatever password you want
        document.getElementById("adminPanel").style.display = "block";
        document.getElementById("adminLoginButton").style.display = "none";
    } else {
        alert("Incorrect password.");
    }
});

// Close admin panel
document.getElementById("closeAdminPanel").addEventListener("click", function() {
    document.getElementById("adminPanel").style.display = "none";
    document.getElementById("adminLoginButton").style.display = "block";
});

// Toggling items listing
document.getElementById("itemsListed").addEventListener("click", function() {
    this.classList.toggle("active");
    const content = document.getElementById("itemsContent");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
});

// Listing items functionality
document.getElementById("listItems").addEventListener("click", function() {
    document.getElementById("listItemsSection").style.display = "block";
    document.getElementById("viewRequestsSection").style.display = "none";
});

// Viewing requests functionality
document.getElementById("viewRequests").addEventListener("click", function() {
    document.getElementById("listItemsSection").style.display = "none";
    document.getElementById("viewRequestsSection").style.display = "block";
});

// Weapon selection and subtype filters
document.getElementById("weaponBtn").addEventListener("click", function() {
    document.getElementById("weaponSubtypes").style.display = "block";
});

// Build selection logic
const buildBtns = document.querySelectorAll(".build-btn");
let selectedBuilds = [];

buildBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        if (selectedBuilds.includes(this.textContent)) {
            selectedBuilds = selectedBuilds.filter(build => build !== this.textContent);
            this.style.backgroundColor = "#2f4f4f";
        } else {
            if (selectedBuilds.length < 2) {
                selectedBuilds.push(this.textContent);
                this.style.backgroundColor = "#556b2f";
            } else {
                alert("Only 2 weapons of choice allowed");
            }
        }
    });
});

// Enable request submission once an item is selected
document.getElementById("itemsContent").addEventListener("click", function() {
    document.getElementById("submitRequest").disabled = false;
});
