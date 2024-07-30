//your code here!
const itemList = document.getElementById('item-list');
const itemsToAdd = 10; // Number of initial items to add
const additionalItems = 2; // Number of items to add on scroll

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
addItems(itemsToAdd);

// Scroll event listener
window.addEventListener('scroll', () => {
    // Check if user has scrolled to the bottom
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        addItems(additionalItems);
    }
});