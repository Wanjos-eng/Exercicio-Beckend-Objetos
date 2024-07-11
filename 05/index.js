//Programa que cria um objeto "curso" e logo apos adicioa a listade aulas no objetos

const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [
        {
            identificador: 1,
            nome_da_aula: "Introdução a programação"
        },
        {
            identificador: 2,
            nome_da_aula: "Variáveis"
        },
        {
            identificador: 3,
            nome_da_aula: "Condicionais"
        },
        {
            identificador: 4,
            nome_da_aula: "Arrays"
        }
    ],
};

console.log(curso);