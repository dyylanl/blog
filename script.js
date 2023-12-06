// Ejemplo de script JavaScript para interactividad (TODO: AMPLIAR)
// Agrega una clase de animación al hacer clic en un proyecto
document.querySelectorAll('#projects article').forEach(article => {
    article.addEventListener('click', () => {
        article.classList.toggle('active');
    });
});

