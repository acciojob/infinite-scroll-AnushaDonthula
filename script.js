//your code here!
document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.getElementById('itemList');

    function addItems(count) {
        for (let i = 0; i < count; i++) {
            const li = document.createElement('li');
            li.textContent = `Item ${itemList.children.length + 1}`;
            itemList.appendChild(li);
        }
    }

    function onScroll() {
        const scrollTop = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= docHeight - 10) {
            addItems(2); // Add 2 items when reaching near the bottom
        }
    }

    // Initial items
    addItems(10);

    // Event listener for scrolling
    window.addEventListener('scroll', onScroll);
});