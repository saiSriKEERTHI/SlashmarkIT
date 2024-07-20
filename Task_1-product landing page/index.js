// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the title color
function changeTitleColor() {
    const title = document.querySelector('.h-primary');
    title.style.color = getRandomColor();
}

// Change the title color every second
setInterval(changeTitleColor, 1000);

// Add animation to the button when clicked
const orderButton = document.querySelector('.btn');
orderButton.addEventListener('click', () => {
    orderButton.classList.add('animate');
    setTimeout(() => {
        orderButton.classList.remove('animate');
    }, 1000);
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Ensure smooth scroll works for mobile nav as well
document.querySelectorAll('#mobile a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});