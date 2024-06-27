let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-inner img');
const images = document.querySelectorAll('.carousel-inner img');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');

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


