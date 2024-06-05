document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hamburger-menu').addEventListener('click', function () {
    this.classList.toggle('change');
    document.getElementById('nav-menu').classList.toggle('active');
    });
});

    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);

    document.getElementById('share-facebook').href = `https://www.facebook.com/sharer.php?u=${url}`;
    document.getElementById('share-whatsapp').href = `https://api.whatsapp.com/send?text=${title}%20${url}`;
    document.getElementById('share-twitter').href = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    document.getElementById('share-line').href = `https://line.me/R/msg/text/?${title}%20${url}`;
    