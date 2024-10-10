let items = [];
let requests = [];

// Admin adding items
document.getElementById("add-item").addEventListener("click", function() {
    let itemName = document.getElementById("item-name").value;
    let itemType = document.getElementById("item-type").value;
    
    if(itemName && itemType) {
        items.push({name: itemName, type: itemType});
        updateItemList();
        document.getElementById("item-name").value = "";
    }
});

function updateItemList() {
    let itemSelection = document.getElementById("item-selection");
    let itemList = document.getElementById("item-list");
    
    itemSelection.innerHTML = '';
    itemList.innerHTML = '';

    items.forEach((item, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.textContent = `${item.name} (${item.type})`;
        itemSelection.appendChild(option);

        let itemDiv = document.createElement("div");
        itemDiv.textContent = `${item.name} (${item.type})`;
        itemList.appendChild(itemDiv);
    });
}

// User submitting requests
document.getElementById("submit-request").addEventListener("click", function() {
    let selectedItem = document.getElementById("item-selection").value;
    let reputation = parseInt(document.getElementById("reputation").value);
    let purpose = document.getElementById("purpose").value;

    let bonusReputation = 0;
    if (purpose === "equip") bonusReputation = 3000;
    else if (purpose === "trait") bonusReputation = 2000;
    else if (purpose === "copy") bonusReputation = 1000;
    else if (purpose === "lithograph") bonusReputation = 500;

    let finalReputation = reputation + bonusReputation;

    requests.push({
        item: selectedItem,
        reputation: finalReputation
    });

    updateRanking();
});

function updateRanking() {
    let rankingList = document.getElementById("ranking-list");
    rankingList.innerHTML = '';

    requests.sort((a, b) => b.reputation - a.reputation);

    requests.forEach((request, index) => {
        let li = document.createElement("li");
        li.textContent = `User ${index + 1}: Item ${items[request.item].name}, Reputation: ${request.reputation}`;
        rankingList.appendChild(li);
    });
}
