//Programa que dado um objeto, percorre ele e faz a verificação, logo apos adiciona uma nova informação aos objetos

const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];

for (let usuario of usuarios) {
    usuario.maiorIdade = usuario.idade > 17;
};

console.log(usuarios);