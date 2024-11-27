// Exemplo de Declaração de Variáveis e Tipagem Dinâmica
let numero = 10; // Inicializando a variável 'numero' com um valor inteiro
console.log(numero);
numero = "dez"; // Mudando o tipo da variável 'numero' para string
console.log(numero);

// Exemplo de Sintaxe e Estruturas de Controle
console.log("Olá, Mundo!"); // Imprimindo uma mensagem simples

// Exemplo de Funções e Métodos
const saudacao = () => {
    console.log("Rodando uma função em JavaScript");
};
saudacao(); // Chamando a função 'saudacao'

// Exemplo de Orientação a Objetos
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    saudacao() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
}
const pessoa = new Pessoa("Carlos");
pessoa.saudacao(); // Criando uma instância de 'Pessoa' e chamando o método 'saudacao'

// Exemplo de Execução Assíncrona
const tarefa = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Tarefa em segundo plano em JavaScript!"); // Simulando uma tarefa assíncrona com setTimeout
        }, 1000);
    });
};
const executarTarefa = async () => {
    const resultado = await tarefa();
    console.log(resultado); // Esperando a conclusão da tarefa assíncrona e imprimindo o resultado
};
executarTarefa();
