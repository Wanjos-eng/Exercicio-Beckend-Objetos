//É um programa que busca encontrar a posição do participante chamado Carlos em uma lista de pessoas que representa os participantes de uma festa e, em seguida, imprime uma mensagem indicando a posição onde ele se encontra.

const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
];

const posicaoCarlos = participantes.findIndex(participante => participante.nome === "Carlos");

if (posicaoCarlos !== -1) {
    const posicaoRealCarlos = posicaoCarlos + 1;
    console.log(`Galera... O Carlos está na posição ${posicaoRealCarlos}, corre lá!`);
} else {
    console.log("Ops, o Carlos não está na festa!");
};
