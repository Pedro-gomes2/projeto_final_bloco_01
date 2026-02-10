import { Geral } from "../model/Geral";

export interface PensaoRepository{
    //fazer pedido
    cadastrarPedido(pedido:Geral):void;
    //listar pedido
    listaPedidos():void;
    //buscar por Id
    procurarPorID(id:number):void;
    //atualizar 
    atualizar(pedido:Geral):void;
   //deletar
    deletar(id:number):void;
    

}