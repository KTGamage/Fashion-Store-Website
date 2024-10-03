// JavaScript for Toggle Menu

document.getElementById('menuToggle').addEventListener('click', function () {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'block';
    }
});


// const testimonials = document.querySelectorAll('.testimonial-card');
// let currentIndex = 0;

// function showTestimonials(index) {
//     testimonials.forEach((testimonial, idx) => {
//         testimonial.classList.remove('active');
//         if (idx === index) {
//             testimonial.classList.add('active');
//         }
//     });
// }

// function nextTestimonial() {
//     currentIndex = (currentIndex + 1) % testimonials.length;
//     showTestimonials(currentIndex);
// }

// function prevTestimonial() {
//     currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
//     showTestimonials(currentIndex);
// }

// document.getElementById('next').addEventListener('click', nextTestimonial);
// document.getElementById('prev').addEventListener('click', prevTestimonial);

// // Automatically show the first testimonial
// showTestimonials(currentIndex);
