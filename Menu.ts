import leia from "readline-sync";
import { Colors } from './src/util/Colors';
import { Input } from "./src/util/Inputs";
import { PensaoController } from "./src/PensaoController/Pensaocontroller";
import { Balcao } from "./src/model/Balcao";
import { Entrega } from "./src/model/Entrega";
import { defaultCharSingleByte } from "iconv-lite";

const pedidos = new PensaoController();

const tipoentrega = ["Retirada no Balcão", "Entrega em Domicilio"];

export function main() {

    let opcao: number;
    criarpedidosTeste();

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
                criarConta();
                keyPress()
                break;
            case 2:
                console.log(Colors.fg.whitestrong, "\n\nListar todos os Pedidos \n\n", Colors.reset);
                pedidos.listaPedidos();
                keyPress()
                break;
            case 3:
                console.log(Colors.fg.whitestrong, "\n\nBuscar Pedido por ID \n\n", Colors.reset);
                buscarPedido();
                keyPress()
                break;
            case 4:
                console.log(Colors.fg.whitestrong, "\n\nAtualizar Pedido\n\n", Colors.reset);
                atualizarConta();
                keyPress()
                break;
            case 5:
                console.log(Colors.fg.whitestrong, "\n\n Deletar   Pedido  \n\n", Colors.reset);
                deletarContaPorNumero();
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
    const cliente = Input.question("");

    console.log("Digite o prato : ")
    const prato = Input.question("");

    console.log("Digite a bebida: ")
    const bebida = Input.question("");
    

    console.log("Digite o quantidade Total: ")
    const quantidade = Input.questionFloat("");

    console.log("Digite o tipo de entrega;")
    const tipo = Input.keyInSelect(tipoentrega, "", { cancel: false}) + 1;

    switch(tipo){
        case 1: // Cria um objeto da classe balcão
            console.log("Digite o Horario da Retirada: ");
            const retirada = Input.question("");
            pedidos.cadastrarPedido(new Balcao (pedidos.gerarNumero(),cliente,prato,bebida,quantidade,tipo,retirada ));
        break;
        case 2: // Cria um objeto da classe Entrega
            console.log("Digite o seu endereço: ");
            const endereco = Input.question("");
            console.log("Digite o quantidade da Taxa: ");
            const tx = Input.questionFloat("");
            pedidos.cadastrarPedido(new Entrega(pedidos.gerarNumero(),cliente,prato,bebida,quantidade,tipo,endereco,tx));
        break;

        





    }

}
//pedidos Para Teste

function criarpedidosTeste(): void {

    // Instâncias da Classe Balcao
    pedidos.cadastrarPedido(new Balcao(pedidos.gerarNumero(),"Rafael","Feijoada","Coca",3,1,"12.30"));
    pedidos.cadastrarPedido(new Balcao(pedidos.gerarNumero(),"Joao","Bacalhau","Pepis",2,1,"13" ));
    
    // Instâncias da Classe ContaPoupança
    pedidos.cadastrarPedido(new Entrega(pedidos.gerarNumero(),"Geana Almeida","Frango Frita","Flexa", 2, 2, "Rua Bastos",5));
    pedidos.cadastrarPedido(new Entrega(pedidos.gerarNumero(),"Jean Lima","Batata Frita","Guaravita",2,2,"Rua General ",7));

}


//Procura pedido por ID
 function buscarPedido():void{
    console.log("Digite o ID do pedido: ");
    const numero = Input.questionInt("");
    pedidos.procurarPorID(numero);
 }

 //Deletar Pedido Por id

 function deletarContaPorNumero(): void {

    console.log("Digite o numero do Pedido: ");
    const numero = Input.questionInt("");
    pedidos.deletar(numero);

}

//Atualizar
function atualizarConta(): void {
    
    // Solicita o id do pedido
    console.log("Digite o ID do Pedido: ");
    const numero = Input.questionInt("");

    // Verifica se a conta existe
    const pedido = pedidos.buscarNoArray(numero);

    //se existir
    if(pedido !== null){
        
        let nome = pedido.cliente
        let prato:string = pedido.prato;
        let bebida:string = pedido.bebida;
        let tipo:number = pedido.tipo;
        let quantidade:number = pedido.quantidade;
        

        console.log(`\nCliente: ${pedido.cliente}`);
       
        console.log("Digite o novo Prato: ");
        console.log("(Pressione ENTER para manter o quantidade atual)");
        prato = Input.question( "" );

        console.log(`\nCliente: ${pedido.cliente}`);
       
        console.log("Digite a nova Bebida: ");
        console.log("(Pressione ENTER para manter o quantidade atual)");
        bebida = Input.question( "" );


        // console.log(`\Cliente: ${pedido.cliente}`);
       
        // console.log("Digite o novo quantidade: ");
        // console.log("(Pressione ENTER para manter o quantidade atual)");
        // quantidade = Input.questionFloat( "" );

        switch(tipo){
            case 1:

            let Horario: string = (pedido as Balcao).hrderetirar;

                // Atualização do horario
                console.log(`\nHorario atual: ${Horario}`);
                console.log("Digite o novo horario: ");
                console.log("(Pressione ENTER para manter o quantidade atual)");
                Horario = Input.question("");
                pedidos.atualizar(new Balcao(numero,nome,prato,bebida,quantidade,tipo,Horario));
            break;
            case 2:

            let endereco: string = (pedido as Entrega).enderaco;

            // Atualização da entrega
            console.log(`\n Endereço Atual: ${endereco}`);
            console.log("Digite o novo dia do aniversário: ");
            console.log("(Pressione ENTER para manter o quantidade atual)");
            endereco = Input.question("");
            console.log("Digite a nova Taxa: ")
            let taxa = Input.questionInt("");
            pedidos.atualizar(new Entrega(numero,nome,prato,bebida,quantidade,tipo,endereco,taxa));

            break;
        }









    }


}