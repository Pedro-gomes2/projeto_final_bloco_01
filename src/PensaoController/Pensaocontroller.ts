import { Balcao } from "../model/Balcao";
import { Geral } from "../model/Geral";
import { PensaoRepository } from "../Repository/PensaoRepository";
import { Colors } from "../util/Colors";

export class PensaoController implements PensaoRepository{
    
    
    private ltspedidos = new Array<Geral>();

    public numero:number = 0;

    
    cadastrarPedido(pedido: Geral): void {
        this.ltspedidos.push(pedido);
        console.log(`Pedido ${pedido.id} Cadastrado com sucesso`);
    }
    listaPedidos(): void {
        for(let pedido of this.ltspedidos){
            pedido.visualizar();
        }
    }
    procurarPorID(numero: number): void {
        const buscarPedido = this.buscarNoArray(numero);

        if(buscarPedido !== null){
            buscarPedido.visualizar();
        }else{
            console.log(`O Pedido id ${numero} não foi encontrado!`);
        }
    }
    
     atualizar(pedido: Geral): void {
        const buscaConta = this.buscarNoArray(pedido.id);

        if(buscaConta !== null){
            this.ltspedidos[this.ltspedidos.indexOf(buscaConta)] = pedido;//array[1]= valor
            console.log(Colors.fg.green,`\nO Pedido do  ${pedido.cliente} foi atualizado com Sucesso`, Colors.reset);

        }else{
            console.log(Colors.fg.red,"\nPedido Nao Encontrada! ", Colors.reset);
        }
       

    }
        



    
    deletar(id: number): void {
        const buscaConta = this.buscarNoArray(id);

        if(buscaConta !== null){
            this.ltspedidos.splice(this.ltspedidos.indexOf(buscaConta),1);
            console.log(Colors.fg.green,`\nO Pedido ${id} foi deletada com Sucesso`, Colors.reset);
        }else{
            console.log(Colors.fg.red,"\nConta Nao Encontrada! ", Colors.reset);
        }
          
    }
    

   
    
    //Metodo Auxiliar 
    public gerarNumero(): number{
        return ++ this.numero;
    }

    public buscarNoArray(id: number): Geral | null {
        for (let pedido of this.ltspedidos){
            if (pedido.id === id)
                return pedido
        }

        return null;
    
    }
    
}