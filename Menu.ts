import leia from "readline-sync";
import { Colors } from './src/util/Colors';
import { Input } from "./src/util/Inputs";

let tipoentrega = ["Retirada no Balcão", "Entrega em Domicilio"];

export function main() {

    let opcao: number;

    while (true) {

        console.log(Colors.bg.black, Colors.fg.whitestrong, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                  Pensão Do João                     ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Fazer pedido                         ");
        console.log("            2 - Listar todos os Pedidos              ");
        console.log("            3 - Buscar Pedido por ID                 ");
        console.log("            4 - Atualizar Pedido                     ");
        console.log("            5 - Deletar   Pedido                     ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        Colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = leia.questionInt("");

        if (opcao === 0) {
            console.log(Colors.fg.greenstrong, "\nPensão do João - Mate quem esta te matando !");
            sobre();
            console.log(Colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(Colors.fg.whitestrong, "\n\nInformações do Pedido\n\n", Colors.reset);
                
                keyPress()
                break;
            case 2:
                console.log(Colors.fg.whitestrong, "\n\nListar todos os Pedidos \n\n", Colors.reset);
                
                keyPress()
                break;
            case 3:
                console.log(Colors.fg.whitestrong, "\n\nBuscar Pedido por ID \n\n", Colors.reset);

                keyPress()
                break;
            case 4:
                console.log(Colors.fg.whitestrong, "\n\nAtualizar Pedido\n\n", Colors.reset);

                keyPress()
                break;
            case 5:
                console.log(Colors.fg.whitestrong, "\n\n Deletar   Pedido  \n\n", Colors.reset);

                keyPress()
            break;
           
            default:
                console.log(Colors.fg.whitestrong, "\nOpção Inválida!\n", Colors.reset);

                keyPress()
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("João Pedro Gomes de Oliveira - oliveira110965@gmail.com");
    console.log("github.com/Pedro_gomes02");
    console.log("*****************************************************");
}

/* Função de pausa entre as opções do menu */
function keyPress(): void {
    console.log(Colors.reset,"\nPressione enter para continuar...");
    leia.prompt();
}

main();


// função Cria pedido
function criarConta(){

    console.log("Digite o Nome do Cliente: ")
    const cliente = Input.questionInt("");

    console.log("Digite o prato : ")
    const prato = Input.question("");

    console.log("Digite a bebida: ")
    const bebida = Input.question("");
    

    console.log("Digite o Valor Total: ")
    const valor = Input.questionFloat("");

    console.log("Digite o tipo de entrega;")
    const tipo = Input.keyInSelect(tipoentrega, "", { cancel: false}) + 1;

    switch(tipo){
        case 1: // Cria um objeto da classe balcão
            console.log("Digite o Horario da Retirada: ");
            const retirada = Input.question("");
            //pedido.cadastrar(new ContaCorrente(
               // contas.gerarNumero(), agencia, titular, tipo, saldo, limite));
        break;

        // case 2: // Cria um objeto da classe Conta Poupança
        //     console.log("Digite o dia do aniversário da conta: ");
        //     const aniversario = Input.questionInt("");
        //     contas.cadastrar(new ContaPoupanca(
        //         contas.gerarNumero(), agencia, titular, tipo, saldo, aniversario));
        // break;

    }

}