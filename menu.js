const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

// Funções para ocultar e mostrar slides
function hideSilder() {
    slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
    slider[currentSlide].classList.add('on');
}

// Funções para avançar e retroceder slides
function nextSlider() {
    hideSilder();
    if (currentSlide === slider.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlider();
}

function prevSlider() {
    hideSilder();
    if (currentSlide === 0) {
        currentSlide = slider.length - 1;
    } else {
        currentSlide--;
    }
    showSlider();
}

// Adiciona os eventos de clique aos botões
btnNext.addEventListener('click', () => nextSlider());
btnPrev.addEventListener('click', () => prevSlider());

// Faz os slides passarem automaticamente
const slideInterval = setInterval(() => {
    nextSlider();
}, 3000); // Troca de slide a cada 3 segundos

// Parar a transição automática ao interagir (opcional)
btnNext.addEventListener('click', () => clearInterval(slideInterval));
btnPrev.addEventListener('click', () => clearInterval(slideInterval));
