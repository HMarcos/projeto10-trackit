import axios from "axios";

const LINK_API_HABITOS_HOJE = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

async function atualizarProgresso(token){
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const promessa =  axios.get(LINK_API_HABITOS_HOJE, config);

    let progressoAtual = 0;

    await promessa.then((response) => {
        const { data } = response;
        const habitos = data;

        const numeroTotalDeHabitos = habitos.length;
        let numeroDeHabitosCompletos = 0;

        habitos.forEach((habito) => {
            if (habito.done) {
                numeroDeHabitosCompletos++;
            }
        })

        
        if (numeroTotalDeHabitos !== 0) {
            progressoAtual = Math.round((numeroDeHabitosCompletos / numeroTotalDeHabitos) * 100);
        }
    })

    await promessa.catch((err) => {
        const { status, data } = err.response;
        alert(`Não foi recuperar a lista de hábitos do servidor.
        Erro ${status}: ${data} `);
    })

    return progressoAtual;

}

export default atualizarProgresso;