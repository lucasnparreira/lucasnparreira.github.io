let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-inner img');
const images = document.querySelectorAll('.carousel-inner img');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');

var contactSection = document.getElementById("contact");
var scrollToTopBtn = document.getElementById("scrollToTop");

// Verificar se a seção de contato está em foco para ativar o arrow-up button desde o inicio
var observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });
}, { threshold: 0.5 });

// Observar a seção de contato para ativar o arrow-up button desde o inicio
observer.observe(contactSection);

document.querySelectorAll('.carousel-inner img').forEach((img, index) => {
    img.addEventListener('click', () => {
        moveSlide(index - currentSlide);
    });
});

function moveSlide(direction) {
    const carouselInner = document.getElementById('carousel-inner');
    const slides = carouselInner.querySelectorAll('img');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = -currentSlide * 150; // 150 is the width of the slide

    let nextIndex = currentSlide;
    let currentWidth = 0;

    while (currentWidth < carouselInner.offsetWidth && nextIndex < totalSlides) {
        slides[nextIndex].style.display = 'block';
        currentWidth += slides[nextIndex].offsetWidth;
        nextIndex++;
    }

    if (currentWidth < carouselInner.offsetWidth - currentWidth) {
        offset -= (carouselInner.offsetWidth - currentWidth) / 2;
    }

    carouselInner.style.transform = `translateX(${offset}px)`;
}

function openModal(index) {
    currentSlide = index;
    modal.style.display = 'flex';
    modalImage.src = images[currentSlide].src;
}

function closeModal() {
    modal.style.display = 'none';
}

function moveSlideModal(n) {
    currentSlide = (currentSlide + n + images.length) % images.length;
    modalImage.src = images[currentSlide].src;
}

function closeModalOnClick(event) {
    if (event.target === modal) {
        closeModal();
    }
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const message = document.querySelector('textarea[name="message"]').value;

    const mailtoUrl = `mailto:stonemates@gmail.com?body=${encodeURIComponent(message)}`;

    window.location.href = mailtoUrl;

    this.reset();
});

function openNav() {
    document.getElementById("mySidenav").style.width = "190px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    
    setTimeout(() => {
        location.reload();
    }, 200);
}


function hiddeBtnArrowTop() {
    document.getElementById("scrollToTop").style.display = "none";
}

function showBtnArrowTop() {
    var contactSection = document.getElementById("contact");
    var scrollToTopBtn = document.getElementById("scrollToTop");

    // Verificar se a seção de contato está em foco
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        });
    }, { threshold: 0.5 });

    // Observar a seção de contato
    observer.observe(contactSection);
}

(function() {
    emailjs.init("JFhbSZfnCuVsWirBS"); // Substitua com seu User ID do EmailJS
})();


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const message = document.querySelector('textarea[name="message"]').value;

    // Monta a URL mailto
    const mailtoUrl = `mailto:stonemates@gmail.com?body=${encodeURIComponent(message)}`;

    // Abre a URL mailto
    window.location.href = mailtoUrl;

    // Limpa os campos do formulário
    this.reset();
});


// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     // Coleta os dados do formulário
//     const formData = new FormData(event.target);
//     const data = {
//         name: formData.get('name'),
//         email: formData.get('email'),
//         phone: formData.get('phone'),
//         message: formData.get('message')
//     };

//     emailjs.sendForm('service_zzlb4ti', 'template_ajdvyct', data)
//         .then(function() {
//             console.log('SUCCESS!', response.status, response.text);
//             alert('Message sent successfully!');
//             // Limpar o formulário após o envio
//             document.getElementById('contact-form').reset();
//         }, function(error) {
//             console.log('FAILED...', error);
//             alert('Failed to send message.');
//         });
// });