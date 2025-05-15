console.log("Página principal carregada!");

// Rolagem suave para links internos (se houver na página principal)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Rolagem suave para os links de navegação para outras páginas
document.querySelectorAll('.links-navegacao a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetUrl = this.getAttribute('href');
        window.location.href = targetUrl;
    });
});

// Adição de GIFs à página principal
const introducaoSection = document.getElementById("introducao");
const gifsPrincipal = [
    "URL_DO_SEU_GIF_PRINCIPAL_1.gif",
    "URL_DO_SEU_GIF_PRINCIPAL_2.gif",
    // Adicione mais URLs de GIFs conforme necessário
];

function adicionarGifsPrincipal() {
    gifsPrincipal.forEach(gifUrl => {
        const gifContainer = document.createElement("div");
        gifContainer.classList.add("gif-container");

        const gifImage = document.createElement("img");
        gifImage.src = gifUrl;
        gifImage.alt = "GIF Ilustrativo";
        gifContainer.appendChild(gifImage);

        introducaoSection.insertBefore(gifContainer, document.querySelector(".links-navegacao"));
    });
}

window.onload = adicionarGifsPrincipal;
