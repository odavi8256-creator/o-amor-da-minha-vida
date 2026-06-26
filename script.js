// Rolagem suave para os links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação ao carregar
window.onload = () => {
    document.body.style.opacity = "1";
};

// Criar corações caindo
function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.innerHTML = "❤️";

    coracao.style.position = "fixed";
    coracao.style.left = Math.random() * window.innerWidth + "px";
    coracao.style.top = "-30px";
    coracao.style.fontSize = (15 + Math.random() * 20) + "px";
    coracao.style.pointerEvents = "none";
    coracao.style.zIndex = "9999";

    document.body.appendChild(coracao);

    let pos = -30;

    const cair = setInterval(() => {
        pos += 3;
        coracao.style.top = pos + "px";

        if (pos > window.innerHeight) {
            clearInterval(cair);
            coracao.remove();
        }
    }, 20);
}

setInterval(criarCoracao, 800);
