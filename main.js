const exercicios = {

    academia: [
        {
            nome: "Supino reto",
            grupo: "Peito"
        },
        {
            nome: "Supino inclinado",
            grupo: "Peito"
        },
        {
            nome: "Crucifixo",
            grupo: "Peito"
        },
        {
            nome: "Puxada frontal",
            grupo: "Costas"
        },
        {
            nome: "Remada baixa",
            grupo: "Costas"
        },
        {
            nome: "Remada curvada",
            grupo: "Costas"
        },
        {
            nome: "Desenvolvimento com halteres",
            grupo: "Ombros"
        },
        {
            nome: "Elevação lateral",
            grupo: "Ombros"
        },
        {
            nome: "Agachamento livre",
            grupo: "Pernas"
        },
        {
            nome: "Leg press",
            grupo: "Pernas"
        },
        {
            nome: "Cadeira extensora",
            grupo: "Pernas"
        },
        {
            nome: "Mesa flexora",
            grupo: "Pernas"
        },
        {
            nome: "Rosca direta",
            grupo: "Bíceps"
        },
        {
            nome: "Rosca martelo",
            grupo: "Bíceps"
        },
        {
            nome: "Tríceps pulley",
            grupo: "Tríceps"
        },
        {
            nome: "Tríceps francês",
            grupo: "Tríceps"
        }
    ],

    casa: [
        {
            nome: "Flexão de braços",
            grupo: "Peito"
        },
        {
            nome: "Flexão diamante",
            grupo: "Tríceps"
        },
        {
            nome: "Flexão inclinada",
            grupo: "Peito"
        },
        {
            nome: "Agachamento",
            grupo: "Pernas"
        },
        {
            nome: "Agachamento sumô",
            grupo: "Pernas"
        },
        {
            nome: "Afundo",
            grupo: "Pernas"
        },
        {
            nome: "Elevação pélvica",
            grupo: "Glúteos"
        },
        {
            nome: "Prancha",
            grupo: "Abdômen"
        },
        {
            nome: "Abdominal tradicional",
            grupo: "Abdômen"
        },
        {
            nome: "Mountain climber",
            grupo: "Cardio"
        },
        {
            nome: "Polichinelo",
            grupo: "Cardio"
        },
        {
            nome: "Burpee",
            grupo: "Cardio"
        }
    ],

    "peso-corporal": [
        {
            nome: "Flexão de braços",
            grupo: "Peito"
        },
        {
            nome: "Flexão diamante",
            grupo: "Tríceps"
        },
        {
            nome: "Flexão aberta",
            grupo: "Peito"
        },
        {
            nome: "Agachamento",
            grupo: "Pernas"
        },
        {
            nome: "Afundo",
            grupo: "Pernas"
        },
        {
            nome: "Agachamento unilateral",
            grupo: "Pernas"
        },
        {
            nome: "Elevação pélvica",
            grupo: "Glúteos"
        },
        {
            nome: "Prancha",
            grupo: "Abdômen"
        },
        {
            nome: "Abdominal",
            grupo: "Abdômen"
        },
        {
            nome: "Mountain climber",
            grupo: "Cardio"
        },
        {
            nome: "Burpee",
            grupo: "Cardio"
        }
    ]
};



const configuracoes = {

    hipertrofia: {
        series: "3–4",
        repeticoes: "8–12",
        descanso: "60–90 segundos"
    },

    forca: {
        series: "4–5",
        repeticoes: "3–6",
        descanso: "2–3 minutos"
    },

    condicionamento: {
        series: "3",
        repeticoes: "12–20",
        descanso: "30–60 segundos"
    }
};




function numeroAleatorio(max) {
    return Math.floor(Math.random() * max);
}




function quantidadeExercicios(duracao) {

    if (duracao <= 30) {
        return 4;
    }

    if (duracao <= 45) {
        return 5;
    }

    if (duracao <= 60) {
        return 6;
    }

    return 8;
}




function gerarTreino() {

   

    const objetivo =
        document.getElementById("objetivo").value;

    const nivel =
        document.getElementById("nivel").value;

    const duracao =
        Number(document.getElementById("duracao").value);

    const local =
        document.getElementById("local").value;


    

    const listaExercicios = exercicios[local];



    const quantidade =
        quantidadeExercicios(duracao);


    

    const configuracao =
        configuracoes[objetivo];


    

    const treino = [];


    

    while (treino.length < quantidade) {

        const exercicio =
            listaExercicios[
                numeroAleatorio(listaExercicios.length)
            ];


        
        const jaExiste =
            treino.some(
                item => item.nome === exercicio.nome
            );


        if (!jaExiste) {
            treino.push(exercicio);
        }
    }


    

    let resultado = `

        <h3>Seu treino</h3>

        <p>
            <strong>Objetivo:</strong>
            ${formatarTexto(objetivo)}
        </p>

        <p>
            <strong>Nível:</strong>
            ${formatarTexto(nivel)}
        </p>

        <p>
            <strong>Duração:</strong>
            ${duracao} minutos
        </p>

        <ol>
    `;


    treino.forEach(exercicio => {

        resultado += `

            <li>

                <strong>
                    ${exercicio.nome}
                </strong>

                <br>

                Grupo muscular:
                ${exercicio.grupo}

                <br>

                ${configuracao.series} séries

                <br>

                ${configuracao.repeticoes} repetições

                <br>

                Descanso:
                ${configuracao.descanso}

            </li>

        `;
    });


    resultado += "</ol>";


    document.getElementById("campo-treino").innerHTML =
        resultado;
}




function formatarTexto(texto) {

    const palavras = texto.split(" ");

    return palavras
        .map(
            palavra =>
                palavra.charAt(0).toUpperCase() +
                palavra.slice(1)
        )
        .join(" ");
}



document
    .getElementById("gerar-treino")
    .addEventListener("click", gerarTreino);