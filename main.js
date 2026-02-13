const { Links } = ("react-router-dom");


const menuIcon = document.getElementById('menu-icons');
const navbar = document.querySelector('.navbar');

// 2. 'onclick' event property ka use karein
menuIcon.onclick = () => {
    // Menu icon ko 'X' (close) icon mein toggle karein
    menuIcon.classList.toggle('fa-xmark');
    
    // Navbar mein 'active' class toggle karein (taaki wo dikhe ya chupe)
    navbar.classList.toggle('active');
};


/*-------------------------------------Scroll section ------------------------*/

let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');
 window.onscroll = () =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLink.forEach.apply(Links => {
                Links.classList.remove('active')
                document.querySelector('header nav a [href*='+ id +']').classList.add('active');
            })
        }
    })
 


 /*---------------------------------*/

 let header = document.querySelector('header');
 header.classList.toggle('sticky' , window.scrolly > 100);

 
 };

 /*-----------------------------------------------------------*/


// Line 1 par agar 'require' hai toh usey delete kar dein

window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

const sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: true
});

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
