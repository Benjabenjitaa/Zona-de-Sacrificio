document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll(".square3");

    squares.forEach(square => {
        square.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.1)";
        });

        square.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)";
        });
    });
});









  