const { Links } = ("react-router-dom");


const menuIcon = document.getElementById('menu-icons');
const navbar = document.querySelector('.navbar');

// 2. 'onclick' event property ka use karein
menuIcon.onclick = () => {
    
    menuIcon.classList.toggle('fa-xmark');
    
    // Navbar mein 'active' class toggle karein (taaki wo dikhe ya chupe)
    navbar.classList.toggle('active');
};


/*-------------------------------------Scroll section ------------------------*/

let sections = document.querySelectorAll('section');

window.onscroll = () => {
    // 1. Sticky Header Logic
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // 2. Animation Trigger on Scroll
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
};

const sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: true
});


sr.reveal('.technical-skills', { origin: 'left' }); 
sr.reveal('.professional-skills', { origin: 'right' })

sr.reveal('.home-content, .heading', { origin: 'top' });
sr.reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
sr.reveal('.home-content h1, .about-img', { origin: 'left' });
sr.reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.typing-text', {
    strings: ['Full-stack Developer','Frontend Developer', 'Web Designer', ],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});
