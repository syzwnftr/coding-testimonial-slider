const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

btnNext.addEventListener('click', function() {
    document.querySelector('.person-img').src = './images/image-john.jpg';
    document.querySelector('.tanya-review').classList.add('hidden');
    document.querySelector('.john-review').classList.remove('hidden');
});

btnPrev.addEventListener('click', function() {
    document.querySelector('.person-img').src = './images/image-tanya.jpg';
    document.querySelector('.john-review').classList.add('hidden');
    document.querySelector('.tanya-review').classList.remove('hidden');
});