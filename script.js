//your code here!
const itemList = document.getElementById('item-list');
const loading = document.getElementById('loading');
const initialItems = 10; // Number of items to load initially
const additionalItems = 2; // Number of items to load on scroll

// Function to create a list item
function createListItem(content) {
    const li = document.createElement('li');
    li.textContent = content;
    return li;
}

// Function to add items to the list
function addItems(count) {
    for (let i = 0; i < count; i++) {
        const itemNumber = itemList.children.length + 1;
        const newItem = createListItem(`Item ${itemNumber}`);
        itemList.appendChild(newItem);
    }
}

// Initial items
addItems(initialItems);

// Function to check if scrolled to bottom
function isScrolledToBottom() {
    return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
}

// Scroll event listener
window.addEventListener('scroll', () => {
    if (isScrolledToBottom()) {
        // Show loading message
        loading.style.display = 'block';
        
        // Add more items
        setTimeout(() => {
            addItems(additionalItems);
            // Hide loading message
            loading.style.display = 'none';
        }, 500); // Simulate network delay
    }
});