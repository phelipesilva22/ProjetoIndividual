const pontuacaoQuiz = sessionStorage.getItem("quizPontuacao")

const respostasIncorretas = 10 - pontuacaoQuiz
const porcentagemErro = 10 * respostasIncorretas
const PorcentagemAcerto = 10 * pontuacaoQuiz


function criarGraficos(){
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
                    "#373a55",
                    "#555555",
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