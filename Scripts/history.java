// Declaração de Variáveis e Tipagem
public class VariaveisETipagem {
    public static void main(String[] args) {
        // Declaração de uma variável inteira
        int numero = 10;
        System.out.println(numero);
    }
}

// Sintaxe e Estruturas de Controle
public class SintaxeEstruturasControle {
    public static void main(String[] args) {
        System.out.println("Olá, Mundo!"); 
    }    
}

// Funções e Métodos
public class FuncoesMetodos {
    public static void saudacao() {
        System.out.println("Função rodando em Java");
    }
    public static void main(String[] args) {
        saudacao(); 
    }
}

// Orientação a Objetos
public class Pessoa {
    String nome; 
    
    public Pessoa(String nome) {
        this.nome = nome;
    }

    public void saudacao() {
        System.out.println("Olá, meu nome é " + nome);
    }

    public static void main(String[] args) {
        Pessoa pessoa = new Pessoa("Carlos");
        pessoa.saudacao();
    }
}

// Execução Assíncrona
public class ExecucaoAssincrona extends Thread {
    public void run() {
        System.out.println("Tarefa assíncrona Java");
    }
    public static void main(String[] args) {
        ExecucaoAssincrona tarefa = new ExecucaoAssincrona();
        tarefa.start();
    }
}
