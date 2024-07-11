//É um programa que simula uma loja online, permitindo que clientes adicionem produtos aos seus carrinhos de compras de acordo com instruções específicas.

const produtos = {
    tv: { nome: "TV Samsung 4K", valorEmCentavos: 129900 },
    notebook: { nome: "Notebook Dell", valorEmCentavos: 399990 },
    mouse: { nome: "Mouse MX Master 3", valorEmCentavos: 23000 },
    teclado: { nome: "Teclado Keychron K8", valorEmCentavos: 50000 },
    caboUsb: { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 },
    carregador: { nome: "Carregador portátil", valorEmCentavos: 4590 },
    webcam: { nome: "Webcam C920s", valorEmCentavos: 80000 },
    monitor: { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }
};

const clientes = {
    patricia: {
        nome: "Patricia",
        carrinho: [
            { item: produtos.teclado, quantidade: 1 },
            { item: produtos.caboUsb, quantidade: 2 },
            { item: produtos.carregador, quantidade: 1 },
            { item: produtos.mouse, quantidade: 1 },
            { item: produtos.monitor, quantidade: 1 }
        ]
    },
    carlos: {
        nome: "Carlos",
        carrinho: [
            { item: produtos.notebook, quantidade: 2 }
        ]
    },
    renato: {
        nome: "Renato",
        carrinho: [
            { item: produtos.webcam, quantidade: 5 }
        ]
    },
    jose: {
        nome: "José",
        carrinho: [
            { item: produtos.tv, quantidade: 1 },
            { item: produtos.caboUsb, quantidade: 2 },
            { item: produtos.webcam, quantidade: 1 }
        ]
    },
    roberto: {
        nome: "Roberto",
        carrinho: [
            { item: produtos.webcam, quantidade: 1 },
            { item: produtos.caboUsb, quantidade: 2 },
            { item: produtos.monitor, quantidade: 1 }
        ]
    }
};

clientes.jose.carrinho.push({ item: produtos.tv, quantidade: 1 });
clientes.jose.carrinho.push({ item: produtos.caboUsb, quantidade: 2 });
clientes.jose.carrinho.push({ item: produtos.webcam, quantidade: 1 });

clientes.carlos.carrinho.push({ item: produtos.notebook, quantidade: 2 });

clientes.patricia.carrinho.push({ item: produtos.teclado, quantidade: 1 });
clientes.patricia.carrinho.push({ item: produtos.caboUsb, quantidade: 2 });
clientes.patricia.carrinho.push({ item: produtos.carregador, quantidade: 1 });
clientes.patricia.carrinho.push({ item: produtos.mouse, quantidade: 1 });
clientes.patricia.carrinho.push({ item: produtos.monitor, quantidade: 1 });

clientes.renato.carrinho.push({ item: produtos.webcam, quantidade: 5 });

clientes.roberto.carrinho.push({ item: produtos.webcam, quantidade: 1 });
clientes.roberto.carrinho.push({ item: produtos.caboUsb, quantidade: 2 });
clientes.roberto.carrinho.push({ item: produtos.monitor, quantidade: 1 });

for (const cliente in clientes) {
    console.log(`${clientes[cliente].nome}:`);
    for (const item of clientes[cliente].carrinho) {
        console.log(`- ${item.quantidade}x ${item.item.nome} - R$ ${(item.item.valorEmCentavos / 100).toFixed(2)}`);
    }
    console.log("\n");
}
