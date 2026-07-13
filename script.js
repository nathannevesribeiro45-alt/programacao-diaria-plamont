// ======================================
// PLAMONT REPORT CENTER
// script.js
// ======================================

// Todas as página
const paginas = document.querySelectorAll(".pagina");

// Todos os botões do menu lateral
const botoes = document.querySelectorAll(".menu-btn");

// Troca de página
function abrirPagina(idPagina, botao) {

    // Esconde todas as páginas
    paginas.forEach(pagina => {
        pagina.classList.remove("ativa");
    });

    // Exibe a página selecionada
    const paginaSelecionada = document.getElementById(idPagina);

    if (paginaSelecionada) {
        paginaSelecionada.classList.add("ativa");
    }

    // Atualiza botão ativo
    botoes.forEach(btn => {
        btn.classList.remove("ativo");
    });

    if (botao) {
        botao.classList.add("ativo");
    }

    // Volta ao topo
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {

    const primeiroBotao = document.querySelector(".menu-btn");

    abrirPagina("dashboard", primeiroBotao);

});