document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.project-btn, .cta-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });
        button.addEventListener('mouseout', function() {
            this.style.boxShadow = 'none';
        });
    });
});
