document.addEventListener('DOMContentLoaded', function () {
    var tooltips = document.querySelectorAll('.hover');
    tooltips.forEach(function(tooltip) {
        tooltip.addEventListener('mouseover', function() {
            var tip = this.querySelector('.tooltip');
            // Ensure the tooltip is initially positioned in the middle.
            tip.style.left = '50%';
            tip.style.right = 'auto';
            tip.style.transform = 'translateX(-50%)';

            // Allow CSS transitions to finish before recalculating
            setTimeout(() => {
                var rect = tip.getBoundingClientRect();

                if (rect.left < 0) { // Check if the tooltip overflows on the left
                    tip.style.left = '0px'; // Align to the left edge
                    tip.style.transform = 'translateX(0%)';
                }
                if (rect.right > window.innerWidth) { // Check if the tooltip overflows on the right
                    tip.style.left = 'auto';
                    tip.style.right = '0px'; // Align to the right edge
                    tip.style.transform = 'translateX(0%)';
                }
            }, 10); // Short delay to allow CSS transitions
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('toggleButton');
    var section = document.getElementById('toggleSection');

    button.addEventListener('click', function () {
        // Toggle the display CSS property
        if (section.style.display === 'none') {
            section.style.display = 'block';
            button.textContent = 'Hide Information'; // Change button text
        } else {
            section.style.display = 'none';
            button.textContent = 'Show More Information'; // Reset button text
        }
    });
});