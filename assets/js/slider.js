const slides = [
    {
        src: 'https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'landscape1',
    },
    {
        src: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'landscape2',
    },
    {
        src: 'https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'landscape3',
    },
    {
        src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'landscape4',
    },
];

let currentSlideIndex = 0;

const slideImg = document.getElementById('sliderImg');
slideImg.src = slides[0].src;
slideImg.alt = slides[0].alt;

const [prevBtn, nextBtn] = document.querySelectorAll('.navBtn');

function nextSliderHandler(event) {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    update(currentSlideIndex);
}

function prevSliderHandler() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    update(currentSlideIndex);
}

nextBtn.addEventListener('click', nextSliderHandler);
prevBtn.addEventListener('click', prevSliderHandler);

function update(currentSlideIndex) {
    slideImg.src = slides[currentSlideIndex].src;
    slideImg.alt = slides[currentSlideIndex].alt;
}