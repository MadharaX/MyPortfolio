function toggleMenu() {
    var menu = document.getElementById('headerS1P1');
    menu.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
    var backToTopLink = document.getElementById('backToTopLink');
    if (backToTopLink) {
        backToTopLink.addEventListener('click', function(event) {
            event.preventDefault();
            smoothScrollToTop();
        });
    }
});

function smoothScrollToTop() {
    const scrollDuration = 200; // Duration in milliseconds
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    const scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}

