export interface PensaoRepository{
    //fazer pedido
    cadastrarPediddo(id:number):void;
    //listar pedido
    listaPedidos():void;
    //buscar por Id
    procurarPorID(id:number):void;
    //atualizar 
    atualizar(id:number):void;
   //deletar
    deletar(id:number):void;
    

}