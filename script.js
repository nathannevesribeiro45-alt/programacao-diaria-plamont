const paginas = document.querySelectorAll(".pagina");
const botoes = document.querySelectorAll(".menu-btn");

// ======================================
// NAVEGAÇÃO ENTRE PÁGINAS
// ======================================

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
// SOMA DOS VALORES DAS LISTAS
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

        const blocoQLP = [...pagina.querySelectorAll(".bloco")].find(bloco => {
    const titulo = bloco.querySelector("h2");
    return titulo && titulo.textContent.includes("Efetivo");
});

if (!blocoQLP) return;

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
const blocoHistograma = [...pagina.querySelectorAll(".bloco")].find(bloco => {
    const titulo = bloco.querySelector("h2");
    return titulo && titulo.textContent.includes("Histograma");
});

if (!blocoHistograma) return;

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
// SPLASH SCREEN
// ======================================

function iniciarSplash() {

    const splash = document.querySelector(".splash-screen");
    const barra = document.querySelector(".loading-fill");
    const texto = document.querySelector(".loading-text");

    if (!splash || !barra || !texto) return;

    const etapas = [
        {
            progresso: 20,
            texto: "Inicializando..."
        },
        {
            progresso: 45,
            texto: "Carregando contratos..."
        },
        {
            progresso: 70,
            texto: "Preparando Dashboard..."
        },
        {
            progresso: 100,
            texto: "Sistema pronto."
        }
    ];

    let indice = 0;

    function carregar() {

        if (indice >= etapas.length) {

            splash.style.transition = "opacity .8s ease";

            splash.style.opacity = "0";

            setTimeout(() => {

                splash.style.display = "none";

            }, 800);

            return;

        }

        barra.style.width = etapas[indice].progresso + "%";

        texto.textContent = etapas[indice].texto;

        indice++;

        setTimeout(carregar, 600);

    }

    setTimeout(carregar, 300);

}

// ======================================
// INICIALIZAÇÃO DO SISTEMA
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const primeiroBotao = document.querySelector(".menu-btn");

    abrirPagina("dashboard", primeiroBotao);

    atualizarTotalQLP();

    atualizarHistograma();

    iniciarSplash();

});
// ======================================
// ABAS DA OS 440
// ======================================

function mostrarAba440(aba) {

    // Alterna botão ativo
    document.querySelectorAll(".os440-tab").forEach(btn => {
        btn.classList.toggle("ativa", btn.dataset.tab === aba);
    });

    // Esconde todas as abas
    document.querySelectorAll("#os440 .os440-conteudo").forEach(sec => {
        sec.style.display = "none";
    });

    // Mostra apenas a aba selecionada
    const abaSelecionada = document.getElementById("aba-" + aba);

    if (abaSelecionada) {
        abaSelecionada.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

}

// Inicialização das abas da OS 440
document.addEventListener("DOMContentLoaded", () => {

    const abas = document.querySelectorAll(".os440-tab");

    abas.forEach(botao => {

        botao.addEventListener("click", () => {
            mostrarAba440(botao.dataset.tab);
        });

    });

    // Abre Integridade por padrão
    mostrarAba440("integridade");

});



// ======================================
// ABAS DA OS 441
// ======================================

function mostrarAba441(aba) {

    // Alterna botão ativo
    document.querySelectorAll(".os441-tab").forEach(btn => {
        btn.classList.toggle("ativa", btn.dataset.tab === aba);
    });

    // Esconde todas as abas
    document.querySelectorAll("#os441 .os441-conteudo").forEach(sec => {
        sec.style.display = "none";
    });

    // Mostra apenas a aba selecionada
    const abaSelecionada = document.getElementById("aba-" + aba);

    if (abaSelecionada) {

        abaSelecionada.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}
// Inicialização das abas da OS 441
document.addEventListener("DOMContentLoaded", () => {

    const abas = document.querySelectorAll(".os441-tab");

    abas.forEach(botao => {

        botao.addEventListener("click", () => {
            mostrarAba441(botao.dataset.tab);
        });

    });

    // Abre Desgaste por padrão
    mostrarAba441("desgaste");

});

// ======================================
// ABAS DA OS 442
// ======================================

function mostrarAba442(aba) {

    // Alterna botão ativo
    document.querySelectorAll(".os442-tab").forEach(btn => {
        btn.classList.toggle("ativa", btn.dataset.tab === aba);
    });

    // Esconde todas as abas
    document.querySelectorAll("#os442 .os442-conteudo").forEach(sec => {
        sec.style.display = "none";
    });

    // Mostra apenas a aba selecionada
    const abaSelecionada = document.getElementById("aba-" + aba);

    if (abaSelecionada) {

        abaSelecionada.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}

// Inicialização das abas da OS 442
document.addEventListener("DOMContentLoaded", () => {

    const abas = document.querySelectorAll(".os442-tab");

    abas.forEach(botao => {

        botao.addEventListener("click", () => {
            mostrarAba442(botao.dataset.tab);
        });

    });

    // Abre Ambiental por padrão
    mostrarAba442("ambiental");

});