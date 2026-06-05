const dadosObras = {
    "praca": {
        titulo: "Praça Eufrásio Correia",
        imagem: "https://lp.curitiba.pr.gov.br/procuritiba/eufrasiocorreia/images/foto0.jpg",
        tipo: "Requalificação de pavimento viário, pavimentação em concreto da canaleta exclusiva, implantação de novas calçadas acessíveis (preservando o calçamento histórico de petit-pavê devido ao tombamento) e ampliação da estação-tubo, que terá sua capacidade dobrada de tamanho (passando para 80 metros)",
        inicio: "07/02/2026",
        previsao: "Início do segundo semestre de 2026",
        status: "Em andamento; cerca de 50% da drenagem já finalizada.",
        desvio: "A estação-tubo Eufrásio Correia está temporariamente desativada. As integrações que ocorriam nela migraram temporariamente para a Praça Rui Barbosa.",
        impacto1: "<strong>Transporte Coletivo:</strong> A estação-tubo Eufrásio Correia está desativada. As linhas metropolitanas e urbanas foram redirecionadas para a Praça Rui Barbosa. A linha especial X48-Eufrásio/Rui Barbosa atua como conexão. Para conectar os usuários afetados, a Urbs criou a linha circular X48 - Eufrásio / Rui Barbosa. Ela opera com saídas a cada sete minutos nos horários de pico, ligando rapidamente a região da praça em obras até os novos pontos de parada na Praça Rui Barbosa.",
        impacto2: "<strong>Trânsito:</strong> A pista lenta da Avenida Sete de Setembro (sentido Praça do Japão) está fechada para obras. Veículos de passeio são desviados pela Rua Barão do Rio Branco, Avenida Visconde de Guarapuava e Rua Lourenço Pinto"
    },
    "terminal": {
        titulo: "Terminal Capão da Imbuia",
        imagem: "https://lp.curitiba.pr.gov.br/procuritiba/terminalcapaodaimbuia/images/foto1.jpg",
        tipo: "Construção de um novo e moderno terminal de ônibus (com 9.920 m² de área construída, três plataformas e 22 pontos de parada) e posterior demolição da estrutura antiga. A intervenção faz parte da evolução do BRT Ligeirão Leste/Oeste e do programa de modernização do transporte coletivo.",
        inicio: "02/02/2026",
        previsao: "Expectativa de conclusão para outubro de 2027",
        status: "A obra está em andamento. O novo terminal está sendo levantado no terreno ao lado da estrutura atual (vizinho à Rua da Cidadania do Cajuru, entre as ruas Professor Nivaldo Braga e Professora Olga Balster).",
        desvio: "Como a nova estrutura está sendo construída na quadra ao lado, o terminal atual continua operando normalmente para o embarque e desembarque dos passageiros durante a maior parte do cronograma.",
        impacto1: "<strong>Transporte Coletivo:</strong> Para os motoristas da região, os desvios de trânsito e bloqueios de faixas ocorrem pontualmente nas ruas do entorno (como as intervenções complementares do projeto Inter 2) conforme o avanço das escavações e pavimentação das vias adjacentes.",
        impacto2: "<strong>Bloqueios principais:</strong> Trechos da Avenida Presidente Affonso Camargo e ruas vizinhas sofrem bloqueios e mudanças de sentido para fluxo de veículos e pedestres. O trânsito exige atenção redobrada e paciência dos motoristas, com registro de lentidão nos horários de pico. Motoristas são orientados a buscar rotas alternativas"
    }
};
const modal = document.getElementById("modal");
let paginaAtual = 0;

function abrirModal(idDaObra){

    const obra = dadosObras[idDaObra];

    document.getElementById("modalTitulo").textContent = obra.titulo;
    document.getElementById("modalImagem").src = obra.imagem;
    document.getElementById("modalTipo").textContent = obra.tipo;
    document.getElementById("modalInicio").textContent = obra.inicio;
    document.getElementById("modalPrevisao").textContent = obra.previsao;
    document.getElementById("modalStatus").textContent = obra.status;
    document.getElementById("modalDesvio").textContent = obra.desvio;

    document.getElementById("modalImpacto1").innerHTML = obra.impacto1;
    document.getElementById("modalImpacto2").innerHTML = obra.impacto2;

    

    paginaAtual = 0;
    mostrarPagina(paginaAtual)

    modal.style.display = "flex";
}



function fecharModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        fecharModal();
    }
}

function mostrarPagina(indice){

    const paginas = document.querySelectorAll(".pagina");
    paginas.forEach(pagina => {
        pagina.classList.remove("ativa");
        pagina.style.display = "none";
    });

    paginas[indice].classList.add("ativa");
    paginas[indice].style.display = "block";
    
}

function proximo(){
    const paginas = document.querySelectorAll(".pagina");
    paginaAtual++;

    if (paginaAtual >= paginas.length){
        paginaAtual = 0
    }

    mostrarPagina(paginaAtual);
}

function anterior(){
    const paginas = document.querySelectorAll(".pagina");
    paginaAtual--;

    if(paginaAtual < 0 ){
        paginaAtual = paginas.length - 1;
    }

    mostrarPagina(paginaAtual);
}