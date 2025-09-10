// Executa quando a página terminar de carregar
window.addEventListener("load", () => {
    // Remove a classe "not-loaded" após 1 segundo
    setTimeout(() => {
        document.body.classList.remove("not-loaded");
    }, 1000);

    // Remove a classe "container" imediatamente
    document.body.classList.remove("container");
});

// Seleciona elementos do envelope
const wrapper = document.querySelector(".wrapper");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

// Abre o envelope
openBtn.addEventListener("click", () => {
    wrapper.classList.add("open");
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
});

// Fecha o envelope
closeBtn.addEventListener("click", () => {
    wrapper.classList.remove("open");
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
});
