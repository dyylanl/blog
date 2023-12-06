// En tu archivo script.js
document.querySelectorAll('#projects article').forEach(article => {
    article.addEventListener('click', () => {
        article.classList.toggle('active');
    });
});
