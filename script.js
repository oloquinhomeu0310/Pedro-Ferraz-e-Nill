const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você prefere começar sua história em uma cidade movimentada ou em um vilarejo tranquilo?",
        alternativas: [
            {
                texto: "A história começa em uma cidade movimentada, cheia de arranha-céus e carros.",
                afirmacao: "A cidade é o centro de onde tudo acontece. As luzes brilhantes e a correria constante trazem uma sensação de urgência e modernidade, criando um contraste com qualquer mistério ou aventura que se desdobra em meio ao caos urbano. "
            },
            {
                texto: " A história começa em um vilarejo tranquilo, rodeado por florestas e montanhas.",
                afirmacao: "O vilarejo é um lugar de paz e tradição, onde o tempo parece ter parado. O ambiente calmo esconde segredos antigos, e a natureza ao redor cria um cenário perfeito para uma aventura que conecta o passado ao presente."
            }
        ]
    },
    {
        enunciado: "Seu personagem principal é um explorador ou um inventor?",
        alternativas: [
            {
                texto: "O personagem principal é um explorador que viaja em busca de tesouros perdidos.",
                afirmacao: " O explorador é movido pela curiosidade e pela sede de descoberta. Ele é destemido e está sempre em busca do desconhecido, disposto a enfrentar qualquer perigo para alcançar seu objetivo."
            },
            {
                texto: "O personagem principal é um inventor que cria máquinas incríveis em sua oficina.",
                afirmacao: "O inventor é um gênio criativo, alguém que vê o mundo de uma forma diferente. Suas invenções são fruto de sua imaginação sem limites, e ele usa seu talento para solucionar problemas e explorar novas possibilidades."
            }
        ]
    },
    {
        enunciado: "O primeiro desafio é enfrentar uma tempestade no mar ou resolver um mistério antigo?",
        alternativas: [
            {
                texto: " O desafio é enfrentar uma tempestade violenta no mar que ameaça afundar o barco.",
                afirmacao: "A tempestade no mar representa a força incontrolável da natureza. É uma prova de coragem e resistência, onde o personagem deve confiar em suas habilidades para sobreviver e seguir em frente."
            },
            {
                texto: "O desafio é resolver um mistério antigo escondido em um livro velho e empoeirado.",
                afirmacao: " O mistério antigo envolve inteligência e paciência. O personagem deve decifrar pistas e entender segredos esquecidos pelo tempo, conectando elementos do passado para descobrir a verdade."
            }
        ]
    },
    {
        enunciado: "*Seu personagem encontra um aliado inesperado ou um inimigo misterioso?",
        alternativas: [
            {
                texto: "Ele encontra um aliado inesperado, um velho sábio que conhece os segredos do mundo. ",
                afirmacao: "O aliado inesperado traz conhecimento e orientação. Sua sabedoria é essencial para o progresso do personagem, oferecendo insights valiosos que podem mudar o rumo da história."
            },
            {
                texto: "Ele encontra um inimigo misterioso, uma figura sombria que segue seus passos.",
                afirmacao: "O inimigo misterioso adiciona tensão e perigo à jornada. Sua presença constante e ameaçadora obriga o personagem a estar sempre em alerta, criando um jogo de gato e rato cheio de suspense."
            }
        ]
    },
    {
        enunciado: "A jornada termina com a descoberta de um segredo ou com a libertação de uma maldição?",
        alternativas: [
            {
                texto: "A jornada termina com a descoberta de um segredo que muda tudo que ele sabia.",
                afirmacao: "A descoberta do segredo traz uma reviravolta na história, onde o personagem percebe que as coisas não são o que pareciam. Este novo conhecimento pode redefinir seu propósito e alterar o destino de todos os envolvidos."
            },
            {
                texto: " A jornada termina com a libertação de uma maldição antiga que assombrava o vilarejo.",
                afirmacao: " A libertação da maldição é um momento de redenção e cura. O personagem consegue quebrar o ciclo de sofrimento, trazendo paz para o vilarejo e encerrando a história com um sentimento de vitória e alívio. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Historia Final";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
