document.addEventListener('DOMContentLoaded', function () {
    // Carrossel
    const carrossel = document.getElementById('imagemCarrossel');
    if (carrossel) {
        const imagens = carrossel.querySelectorAll('.carrossel-imagens img');
        const btnPrev = carrossel.querySelector('.carrossel-btn.prev');
        const btnNext = carrossel.querySelector('.carrossel-btn.next');
        let idx = 0;

        function mostrarImagem(i) {
            imagens.forEach((img, j) => {
                img.classList.toggle('ativo', j === i);
            });
        }

        function avancar() {
            idx = (idx + 1) % imagens.length;
            mostrarImagem(idx);
        }

        function voltar() {
            idx = (idx - 1 + imagens.length) % imagens.length;
            mostrarImagem(idx);
        }

        btnPrev.addEventListener('click', voltar);
        btnNext.addEventListener('click', avancar);
        mostrarImagem(idx);
    }

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
