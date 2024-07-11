//Programa que cria dois objetos/costantes e passa para o segundoo obejeto o edenreço armazenado no primeiro objeto. 

const endereco = {
    rua: "Rua das Flores",
    numero: 999,
    complemento: "Apto 401",
    bairro: "Centro",
    cep: "12345-678",
    cidade: "Petrolina",
    estado: "PE",
    pais: "Brasil"
};

const usuario = {
    nome: "Wanjos",
    email: "wanjos@example.com",
    telefone: "(11) 99999-9999",
    data_nascimento: "29/07/2000",
    endereco: endereco // Associando o objeto endereco ao objeto usuario
};

console.log(endereco);
console.log(usuario);