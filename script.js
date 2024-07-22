
document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'img/01.jpeg', 'img/02.jpeg', 'img/03.jpeg', 'img/04.jpeg', 'img/05.jpeg',
        'img/06.jpeg', 'img/07.jpeg', 'img/08.jpeg', 'img/09.jpeg', 'img/10.jpeg',
        'img/11.jpeg', 'img/12.jpeg'
    ];
    let index = 0;

    const imageContainer = document.getElementById('imageContainer');
    const modalImage = document.getElementById('modalImage');
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));

    images.forEach((src, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = src;
        imgElement.className = 'img-fluid img-thumbnail shadow bg-body-tertiary mb-4 col-lg-3 col-md-4 col-sm-6';
        imgElement.dataset.index = index;

        imgElement.addEventListener('click', function () {
            modalImage.src = src;
            imageModal.show();
        });

        imageContainer.appendChild(imgElement);
    });

    const hbgimg = document.getElementById('hbgimg');

    function changeImage() {
        hbgimg.classList.add('fade-out');
        setTimeout(() => {
            index = (index + 1) % images.length;
            hbgimg.style.backgroundImage = `url('${images[index]}')`;
            hbgimg.classList.remove('fade-out');
        }, 500);
    }

    setInterval(changeImage, 5000);
});
