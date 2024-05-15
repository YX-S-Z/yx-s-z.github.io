document.addEventListener('DOMContentLoaded', function() {
    var hoverElements = document.querySelectorAll('.hoverable'); // Adjust class as needed

    hoverElements.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            var tooltip = document.querySelector('.tooltip'); // Assuming there's one tooltip for all hoverable elements
            tooltip.textContent = element.getAttribute('data-tooltip'); // Set tooltip text
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';

            var elementRect = element.getBoundingClientRect();
            var tooltipWidth = 200; // Explicit width of the tooltip

            // Initial left position to try centering the tooltip relative to the element
            var leftPos = elementRect.left + (elementRect.width / 2) - (tooltipWidth / 2) + window.scrollX;

            // Ensure the tooltip does not overflow the right side of the viewport
            if (leftPos + tooltipWidth > window.innerWidth) {
                leftPos = window.innerWidth - tooltipWidth - 150; // Adjust so there is a small margin on the right
            }

            // Ensure the tooltip does not overflow the left side of the viewport
            if (leftPos < 0) {
                leftPos = 10; // Maintain a minimum left margin if too far to the left
            }

            tooltip.style.left = `${leftPos}px`;
            tooltip.style.top = `${elementRect.bottom + window.scrollY + 5}px`; // Position below the element with a small gap
        });

        element.addEventListener('mouseleave', function() {
            var tooltip = document.querySelector('.tooltip'); // Assuming one tooltip element
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        });
    });
});




document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('toggleButton');
    var section = document.getElementById('toggleSection');

    button.addEventListener('click', function () {
        // Toggle the display CSS property
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
            button.textContent = 'Hide Information'; // Change button text
        } else {
            section.style.display = 'none';
            button.textContent = 'Show More Information'; // Reset button text
        }
    });
});