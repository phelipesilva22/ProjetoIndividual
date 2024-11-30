const pontuacaoQuiz = sessionStorage.getItem("quizPontuacao");

/* const pontuacaoAtual = document.getElementById("pontuacao-atual"); */
const mediaPontuacao = document.getElementById('pontuacao-atual');
const qtdTentativas = document.getElementById("qtd-tentativas");
const totalUsuarios = document.getElementById("total-usuarios");

/* pontuacaoAtual.innerHTML = `${pontuacaoQuiz}/10`;  */

const Incorretas = 10 - pontuacaoQuiz;
const PorcentagemErro = 10 * Incorretas;
const PorcentagemAcerto = 10 * pontuacaoQuiz;

let pessoaTop1 = "";
let pessoaTop2 = "";
let pessoaTop3 = "";
let pontuacaoPessoaTop1 = 0;
let pontuacaoPessoaTop2 = 0;
let pontuacaoPessoaTop3 = 0;

// Função para buscar os dados de tentativas
function buscarTentativas() {
    return fetch("/pontuacao/QtdTentativasUsuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            idUsuarioServer: sessionStorage.ID_USUARIO
        }),
    })
        .then(resposta => resposta.json())
        .then(json => {
            qtdTentativas.innerHTML = json[0].QtdTentativas;
        });
}

// Função para buscar o total de usuários
function buscarTotalUsuarios() {
    return fetch("/pontuacao/TotalUsuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            idUsuarioServer: sessionStorage.ID_USUARIO
        }),
    })
        .then(resposta => resposta.json())
        .then(json => {
            totalUsuarios.innerHTML = json[0].TotalUsuarios;
        });
}



// Função para buscar os Top 3 usuários
function buscarTop3Usuarios() {
    return fetch("/pontuacao/Top3Usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            idUsuarioServer: sessionStorage.ID_USUARIO
        }),
    })
        .then(resposta => resposta.json())
        .then(json => {
            pessoaTop1 = json[0].Nome;
            pessoaTop2 = json[1].Nome;
            pessoaTop3 = json[2].Nome;

            pontuacaoPessoaTop1 = json[0].Pontuação;
            pontuacaoPessoaTop2 = json[1].Pontuação;
            pontuacaoPessoaTop3 = json[2].Pontuação;
        });
}


function buscarMediaPontuacao() {
    return fetch("/pontuacao/MediaPontuacao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            idUsuarioServer: sessionStorage.ID_USUARIO,
        }),
    })
        .then(resposta => resposta.json())
        .then(json => {
            console.log("Média recebida: ", json);
            mediaPontuacao.innerHTML = json[0].MediaPontuacao || "Erro ao buscar média";
        });
}



// Função para criar os gráficos
function criarGraficos() {
  const labels = [pessoaTop1, pessoaTop2, pessoaTop3];

  const data = {
      labels: labels,
      datasets: [
          {
              label: 'Pontuação',
              data: [pontuacaoPessoaTop1, pontuacaoPessoaTop2, pontuacaoPessoaTop3], 
              backgroundColor: [
                  "#ffd700" , 
                  "#c0c0c0", 
                  "#cd7f32"
              ],
              borderColor: [
                  "#373a55", 
                  "#555555", 
                  "#373a55" 
              ],
              borderWidth: 1,
          }
      ],
  };
  
  const config = {
      type: "bar",
      data: data,
      options: {
          plugins: {
              legend: {
                  display: false, 
              },
          },
          scales: {
              x: {
                  grid: {
                      display: false, 
                  },
                  type: 'category', 
                  labels: labels, 
              },
              y: {
                  grid: {
                      display: false, 
                  },
              },
          },
      },
  };
  
  // Criação do gráfico
  const myChart = new Chart(document.getElementById("chartJS"), config);
  

    const labels2 = ["Corretas", "Incorretas"];
    const data2 = {
        labels: labels2,
        datasets: [
            {
                label: "Porcentagem",
                data: [PorcentagemAcerto, PorcentagemErro],
                backgroundColor: [
                    "#008000",
                    "#ff0000",
                ],
            },
        ],
    };

    const config2 = {
        type: "pie",
        data: data2,
        options: {},
    };

    const myChart2 = new Chart(document.getElementById("chartJS2"), config2);
}

// Aguarda todas as requisições serem concluídas
Promise.all([buscarTentativas(), buscarTotalUsuarios(), buscarTop3Usuarios(), buscarMediaPontuacao()])
    .then(() => {
        criarGraficos();
    })
    .catch(error => {
        console.error("Erro ao carregar os dados:", error);
    });
















