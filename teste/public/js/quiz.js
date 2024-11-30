const perguntas = [
    // --- Pergunta 1 do quiz ---
    {
        pergunta: "Em que ano foi criado a orquestra da CCB?",
        respostas: [
            {texto: "1934", correta: false},
            {texto: "1932", correta: true},
            {texto: "1936", correta: false},
            {texto: "1938", correta: false},
        ]
    },
    // --- Pergunta 2 do quiz ---
    {
        pergunta: "Qual foi o objetivo da criação da orquestra na CCB?",
        respostas: [
            {texto: "Auxiliar a irmandade a cantar os sacros hinos", correta: true},
            {texto: "Fazer apresentações/exibições na igreja", correta: false},
            {texto: "Entreter a irmandade durante os cultos", correta: false},
            {texto: "Ser uma orquestra profissional", correta: false},
        ]
    },
    // --- Pergunta 3 do quiz ---
    {
        pergunta: "Quais são as categorias dos instrumentos permitidos na orquestra ccb?",
        respostas: [
            {texto: "Cordas, madeiras e percussão", correta: false},
            {texto: "Madeiras, percussão e eletrônico", correta: false},
            {texto: "Cordas, madeiras, metais e orgão eletrônico", correta: true},
            {texto: "Percussão, metais e cordas", correta: false},
        ]
    },
    // --- Pergunta 4 do quiz ---
    {
        pergunta: "Qual instrumento abaixo pertence ao grupo de cordas?",
        respostas: [
            {texto: "Flugelhorn", correta: false},
            {texto: "Clarinete", correta: false},
            {texto: "Flauta", correta: false},
            {texto: "Violino", correta: true},
        ]
    },
    // --- Pergunta 5 do quiz ---
    {
        pergunta: "Qual instrumento abaixo pertence ao grupo das madeiras?",
        respostas: [
            {texto: "Trompa", correta: false},
            {texto: "Saxofone Soprano", correta: true},
            {texto: "Viola", correta: false},
            {texto: "Trombone", correta: false},
        ]
    },
    // --- Pergunta 6 do quiz ---
    {
        pergunta: "Qual instrumento abaixo pertence ao grupo dos metais?",
        respostas: [
            {texto: "Fagote", correta: false},
            {texto: "Oboé", correta: false},
            {texto: "Trompete", correta: true},
            {texto: "Violoncello", correta: false},
        ]
    },
    // --- Pergunta 7 do quiz ---
    {
        pergunta: "Quantas edições teve o hinário da CCB?",
        respostas: [
            {texto: "3", correta: false},
            {texto: "5", correta: true},
            {texto: "4", correta: false},
            {texto: "6", correta: false},
        ]
    },
    // --- Pergunta 8 do quiz ---
    {
        pergunta: "Quantos hinos e coros foram oficialmente catalogados no hinário 5 da CCB?",
        respostas: [
            {texto: "480 e 6 coros", correta: true},
            {texto: "430 e 6 coros", correta: false},
            {texto: "480 e 5 coros", correta: false},
            {texto: "430 e 5 coros", correta: false},
        ]
    },
    // --- Pergunta 9 do quiz ---
    {
        pergunta: "Quem é o responsável pela orquestra local?",
        respostas: [
            {texto: "Encarregado Regional", correta: false},
            {texto: "Ancião", correta: false},
            {texto: "Encarregado Local", correta: true},
            {texto: "Maestro", correta: false},
        ]
    },
    // --- Pergunta 10 do quiz ---
    {
        pergunta: "Quem é o responsável pela orquestra regional?",
        respostas: [
            {texto: "Ancião", correta: false},
            {texto: "Encarregado Regional", correta: true},
            {texto: "Encarregado Local", correta: false},
            {texto: "Maestro", correta: false},
        ]
    }
]



const containerInicio = document.getElementById('inicio-container')
const containerQuiz = document.getElementById('quiz-container')
const perguntasQuiz = document.getElementById('pergunta')
const respostasQuiz = document.getElementById('resposta-botoes')
const botaoProximaPergunta = document.getElementById('proximo-btn')
const mensagemFinal = document.getElementById('mensagem-final')
const botaoDashboard = document.getElementById('dashboard-btn')


let indicePerguntaAtual = 0
let pontuacao = 0


function mostrarTelaInicial()
{
    containerInicio.style.display = "block"
    containerQuiz.style.display = "none"
    mensagemFinal.style.display = "none"
}


function comecarQuiz()
{
    containerInicio.style.display = "none"
    containerQuiz.style.display = "block"
    mensagemFinal.style.display = "none"


    indicePerguntaAtual = 0
    pontuacao = 0
    botaoProximaPergunta.innerHTML = "Proximo"
    mostrarPerguntas()
}

function mostrarPerguntas()
{
    esconderBotoesIniciais()

    let perguntaAtual = perguntas[indicePerguntaAtual]
    let numeroPergunta = indicePerguntaAtual + 1
    perguntasQuiz.innerHTML = `${numeroPergunta}. ${perguntaAtual.pergunta}`

    perguntaAtual.respostas.forEach(resposta => {
        const botao = document.createElement("button")
        botao.innerHTML = resposta.texto
        botao.classList.add("btn")
        respostasQuiz.appendChild(botao)
        if (resposta.correta)
        {
            botao.dataset.correta = resposta.correta
        }
        botao.addEventListener("click", selecionarResposta)
    })
}

function esconderBotoesIniciais()
{
    botaoProximaPergunta.style.display = "none"
    while(respostasQuiz.firstChild)
    {
        respostasQuiz.removeChild(respostasQuiz.firstChild)
    }
}

function selecionarResposta(e)
{
    const selecaoBtn = e.target
    const estaCorretaResposta = selecaoBtn.dataset.correta == "true"
    if (estaCorretaResposta)
    {
        selecaoBtn.classList.add("correta")
        pontuacao++
    } else {
        selecaoBtn.classList.add("incorreta")
    }
    Array.from(respostasQuiz.children).forEach(botao =>{
        if (botao.dataset.correta === "true")
        {
            botao.classList.add("correta")
        }
        botao.disabled = true
    })
    botaoProximaPergunta.style.display = "block"
}

function mostrarPontuacao()
{
    containerQuiz.style.display = 'none';
    mensagemFinal.style.display = 'block';

    var mensagemPontuacao = ''
    if (pontuacao < 5)
    {
        mensagemPontuacao = 'Minha irmã sabe mais que você ... &#x1F923;'
    } else if (pontuacao < 7)
    {
        mensagemPontuacao = 'Bom resultado ... &#x1F642'
    } else if (pontuacao < 10)
    {
        mensagemPontuacao = 'Excelente resultado, parabéns! &#x1F603'
    } else
    {
        mensagemPontuacao = 'Gabaritou!! &#x1F4AA; &#x1F4AF;'
    }


    sessionStorage.setItem("quizPontuacao", pontuacao);

      // Enviando o valor da nova input
    fetch("/pontuacao/InserirPontuacao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          pontuacaoServer: pontuacao,
          idUsuarioServer: sessionStorage.ID_USUARIO
        }),
      })

      mensagemFinal.innerHTML = `
      <h2>Você acertou ${pontuacao} das ${perguntas.length} perguntas</h2>
      <p>${mensagemPontuacao}</p>`
    
}


function passarPergunta()
{
    indicePerguntaAtual++
    if(indicePerguntaAtual < perguntas.length)
    {
        mostrarPerguntas()
    } else 
    {
        mostrarPontuacao()
    }
}


botaoProximaPergunta.addEventListener("click", () =>{
    if (indicePerguntaAtual < perguntas.length)
    {
        passarPergunta()
    } else
    {
        comecarQuiz()
    }
})

botaoDashboard.addEventListener("click", () => {
    window.location.href = "dashboard.html"
})


mostrarTelaInicial()


















/* const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNO + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct == "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){

    resetState();
    questionElement.innerHTML = `Sua pontuação foi de ${score} de ${questions.length}!`;
    nextButton.innerHTML = "DASHBOARD";
    nextButton.style.display = "block";

    sessionStorage.setItem("quizScore", score);

      // Enviando o valor da nova input
    fetch("/pontuacao/InserirPontuacao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          pontuacaoServer: score,
          idUsuarioServer: sessionStorage.ID_USUARIO
        }),
      })

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        window.location.href = "dashboard.html";
    }
})


startQuiz();


 */