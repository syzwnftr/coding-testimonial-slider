const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

btnNext.addEventListener('click', function() {
    document.querySelector('.person-img').src = './images/image-john.jpg';
});

btnPrev.addEventListener('click', function() {
    document.querySelector('.person-img').src = './images/image-tanya.jpg';
});