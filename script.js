//your code here!
document.addEventListener('DOMContentLoaded', function () {
    const itemList = document.getElementById('itemList');
    let itemCount = 10; // Start with 10 items

    // Function to add new list items
    function addItems(count) {
        for (let i = 0; i < count; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = `Item ${++itemCount}`;
            itemList.appendChild(listItem);
        }
    }

    // Initial load
    addItems(10);

    // Function to check if user is at the bottom of the page
    function checkScroll() {
        const scrollTop = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= documentHeight - 5) {
            // Add 2 more items when close to the bottom
            addItems(2);
        }
    }

    // Listen for scroll events
    window.addEventListener('scroll', checkScroll);
});

