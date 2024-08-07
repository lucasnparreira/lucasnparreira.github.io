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
    document.getElementById("mySidenav").style.width = "375px";
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


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('send-button').addEventListener('click', function(event) {
        // Função para armazenar os valores do formulário
        function storeFormValues() {
            var name = document.getElementById('form_name').value;
            var email = document.getElementById('form_email').value;
            var phone = document.getElementById('form_phone').value;
            var message = document.getElementById('form_message').value;

            // Exibir os valores no console
            // console.log("Name:", name);
            // console.log("Email:", email);
            // console.log("Phone:", phone);
            // console.log("Message:", message);

            return {
                name: name,
                email: email,
                phone: phone,
                message: message
            };
        }

        // Armazenar os valores do formulário
        var formData = storeFormValues();

        // Construir o corpo do e-mail
        var body = 'Name: ' + encodeURIComponent(formData.name) + '%0D%0A' +
                'Email: ' + encodeURIComponent(formData.email) + '%0D%0A' +
                'Phone: ' + encodeURIComponent(formData.phone) + '%0D%0A' +
                'Message: ' + encodeURIComponent(formData.message);

        // Construir o link mailto
        var mailtoLink = 'mailto:stonemateshb@gmail.com'
                        + '?subject=' + encodeURIComponent('Contact - Requesting a quote')
                        + '&body=' + body;

        // console.log("Mailto Link:", mailtoLink);  // Debugging line to check the mailto link

        // Redirecionar para o link mailto
        window.location.href = mailtoLink;

        // Limpar o formulário após 5 segundos
        setTimeout(function() {
            document.getElementById('form_name').value = '';
            document.getElementById('form_email').value = '';
            document.getElementById('form_phone').value = '';
            document.getElementById('form_message').value = '';
        }, 1000); 
    });
});