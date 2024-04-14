/*================= Toggle icon navbar =================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*================= Scroll selection active link =================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*================= Sticky navbar =================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*================= Remove toggle icon and navbar =================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*================= Scroll Reveal =================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home .content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .services-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*================= Typing JS =================*/
const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'UI/UX Designer', 'Graphic Designer', 'Freelancer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});

/*================= Contact Form =================*/

const form = document.querySelector('form');

const fname = document.getElementById('first-name');
const lname = document.getElementById('last-name');
const email = document.getElementById('email');
const mess = document.getElementById('message');

function sendEmail() {
    const bodyMessage = `
        <h1>Contact Details</h1>
        <ul>
            <li>First Name: ${fname.value}</li>
            <li>Last Name: ${lname.value}</li>
            <li>Email: ${email.value}</li>
            <li>Message: ${mess.value}</li>
        </ul>
    `;

    Email.send({
        SecureToken : "35c64e0e-b701-4f5a-9922-a35a320172f2",
        To : 'ashwindeepak.official@gmail.com',
        From : "info@ashwindeepak.me",
        Subject : "Portfolio - Contact from " + email.value,
        Body : bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll('.item');

    for (const item of items) {
        if (item.value === "") {
            item.classList.add('error');
            item.parentElement.classList.add('error');
        }

        item.addEventListener("keyup", () => {
            if (item.value !== "") {
                item.classList.remove('error');
                item.parentElement.classList.remove('error');
            }
            else {
                item.classList.add('error');
                item.parentElement.classList.add('error');
            }
        })
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    sendEmail();
});