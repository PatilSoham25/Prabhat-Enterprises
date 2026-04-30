document.addEventListener('DOMContentLoaded', () => {
    // Find all the product interactive info areas on the page
    const infoPanels = document.querySelectorAll('.main-products-interactive-info');

    // Loop through each panel so they act independently
    infoPanels.forEach(panel => {
        const tabButtons = panel.querySelectorAll('.main-products-tab-btn');
        const tabContents = panel.querySelectorAll('.main-products-tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                
                // 1. Remove 'active' class from buttons ONLY within this specific product panel
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // 2. Remove 'active' class from content ONLY within this specific product panel
                tabContents.forEach(content => content.classList.remove('active'));

                // 3. Add 'active' class to the clicked button
                button.classList.add('active');

                // 4. Find the matching content panel and show it
                const targetId = button.getAttribute('data-target');
                document.getElementById(targetId).classList.add('active');
            });
        });
    });
});