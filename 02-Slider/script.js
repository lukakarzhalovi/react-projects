let currentSlide = 0;

const images = document.querySelectorAll('.slider-image')
const dots = document.querySelectorAll('.dot')
const leftButton = document.querySelector('.arrow-btn.left')
const rightButton = document.querySelector('.arrow-btn.right')

const totalSlides = images.length;

function showSlide (sliderIndex) {
    images.forEach(img => img.classList.remove('active'))
    dots.forEach(dot => dot.classList.remove('active'))

    images[sliderIndex].classList.add('active')
    dots[sliderIndex].classList.add('active')
} 


function nextSlide(){
    currentSlide++

    if(currentSlide >= totalSlides){
        currentSlide = 0
    }

    showSlide(currentSlide)
} 

function previousSlide(){
    currentSlide--

    if(currentSlide < 0){
        currentSlide = totalSlides - 1
    }

    showSlide(currentSlide)
}

function goToSlideFromDot(dotIndex){
    currentSlide = dotIndex
    showSlide(currentSlide)
}

rightButton.addEventListener('click', nextSlide)
leftButton.addEventListener('click', previousSlide)

dots.forEach((dot, index) => {
    dot.addEventListener('click',() =>  goToSlideFromDot(index))
});

showSlide(currentSlide);
