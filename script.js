/* Body background with creatures and gargoyles */
body {
    background-image: url('creature-bg.png'), url('gargoyle-bg.png'); /* Replace with actual image URLs */
    background-size: cover;
    background-position: center, bottom;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    background-color: #1a1a1a; /* Dark background */
    color: #b8860b; /* Dark golden color for text */
    font-family: 'DiabloFont', serif; /* Optional: Custom Diablo-inspired font */
}

/* User Section */
.user-section {
    background-color: rgba(0, 0, 0, 0.7);
    border: 2px solid #b8860b;
    padding: 20px;
    border-radius: 10px;
}

/* Admin Panel Styles */
.admin-panel {
    display: none; /* Hidden by default */
    background-color: rgba(0, 0, 0, 0.8);
    border: 2px solid #b8860b;
    padding: 20px;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    z-index: 1000;
    color: #b8860b; /* Dark golden text */
}

/* Sidebar Styles */
#sidebar {
    width: 20%;
    float: left;
}

.category-btn {
    display: block;
    margin: 10px 0;
    padding: 10px;
    background-color: #444;
    color: #b8860b;
    border: 2px solid #b8860b;
    cursor: pointer;
}

/* Middle Section Styles */
#middle-section {
    float: left;
    width: 70%;
    padding: 20px;
}

/* Search Container */
#search-container {
    text-align: right;
    margin-bottom: 10px;
}

#search-bar {
    padding: 10px;
    border: 2px solid #b8860b;
    color: #b8860b;
    background-color: #333;
}

/* Rarity Buttons */
.rarity-btn {
    padding: 10px;
    margin: 5px;
    color: white;
}

.rarity-btn[data-rarity="rare"] {
    background-color: blue; /* Blue for Rare */
}

.rarity-btn[data-rarity="epic"] {
    background-color: purple; /* Purple for Epic */
}

/* Real-time Ranking Styles */
.real-time-ranking {
    margin-top: 20px;
}

/* Ranking list items */
#ranking-list li {
    font-size: 1.2em;
    margin: 10px 0;
    color: #ffcc00; /* Bright golden for ranking items */
}

/* Button hover effects */
button:hover {
    background-color: #444; /* Darker hover effect */
    color: #ffcc00; /* Brighter gold on hover */
}

/* Clearfix for float */
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}
