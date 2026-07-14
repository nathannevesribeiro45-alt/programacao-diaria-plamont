const paginas = document.querySelectorAll(".pagina");
const botoes = document.querySelectorAll(".menu-btn");

function abrirPagina(idPagina, botao) {

    paginas.forEach(pagina => {
        pagina.classList.remove("ativa");
    });

    const paginaSelecionada = document.getElementById(idPagina);

    if (paginaSelecionada) {
        paginaSelecionada.classList.add("ativa");
    }

    botoes.forEach(btn => {
        btn.classList.remove("ativo");
    });

    if (botao) {
        botao.classList.add("ativo");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ======================================
// RETORNA A SOMA DOS VALORES DE UMA LISTA
// ======================================

function somarLista(lista) {

    let total = 0;

    if (!lista) return total;

    lista.querySelectorAll("strong").forEach(item => {

        const valor = parseInt(item.textContent);

        if (!isNaN(valor)) {
            total += valor;
        }

    });

    return total;

}

// ======================================
// TOTAL DO QLP
// ======================================

function atualizarTotalQLP() {

    document.querySelectorAll(".pagina").forEach(pagina => {

        const blocos = pagina.querySelectorAll(".bloco");

        if (blocos.length < 2) return;

        const blocoQLP = blocos[0];

        const listas = blocoQLP.querySelectorAll(".efetivo-coluna ul");

        if (listas.length === 0) return;

        let total = 0;

        listas.forEach(lista => {
            total += somarLista(lista);
        });

        const campoTotal = blocoQLP.querySelector(".efetivo-total");

        if (campoTotal) {

            campoTotal.innerHTML =
                `👥 Total em área: <strong>${total}</strong> colaboradores`;

        }

    });

}

// ======================================
// TOTAL DO HISTOGRAMA
// ======================================

function atualizarHistograma() {

    document.querySelectorAll(".pagina").forEach(pagina => {

        const blocos = pagina.querySelectorAll(".bloco");

        if (blocos.length < 2) return;

        const blocoHistograma = blocos[1];

        const listas = blocoHistograma.querySelectorAll(".efetivo-coluna ul");

        if (listas.length === 0) return;

        let total = 0;

        listas.forEach(lista => {
            total += somarLista(lista);
        });

        let campoTotal = blocoHistograma.querySelector(".hist-total");

        if (!campoTotal) {

            campoTotal = document.createElement("div");

            campoTotal.className = "efetivo-total hist-total";

            blocoHistograma.appendChild(campoTotal);

        }

        campoTotal.innerHTML =
            `👥 Total do Histograma: <strong>${total}</strong> colaboradores`;

    });

}

// ======================================
// INICIALIZAÇÃO
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const primeiroBotao = document.querySelector(".menu-btn");

    abrirPagina("dashboard", primeiroBotao);

    atualizarTotalQLP();

    atualizarHistograma();

});