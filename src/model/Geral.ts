export abstract class Geral{

    // Atributos da Classe
    private _id:number;
    private _cliente:string;
    private _prato:string;
    private _bebida:string;
    private _valor:number;
    private _tipo:number;

    // Método Construtor
	constructor(id: number, cliente: string, prato: string, bebida: string, valor: number, tipo:number) {
		this._id = id;
		this._cliente = cliente;
		this._prato = prato;
		this._bebida = bebida;
		this._valor = valor;
        this._tipo = tipo;
	}


    //Método Get e Set 
	public get id(): number {
		return this._id;
	}

	public set id(value: number) {
		this._id = value;
	}


   
	public get cliente(): string {
		return this._cliente;
	}

	public set cliente(value: string) {
		this._cliente = value;
	}

    
	public get prato(): string {
		return this._prato;
	}

    
	public set prato(value: string) {
		this._prato = value;
	}

    
	public get bebida(): string {
		return this._bebida;
	}

    
	public set bebida(value: string) {
		this._bebida = value;
	}

    
	public get valor(): number {
		return this._valor;
	}

    
	public set valor(value: number) {
		this._valor = value;
	}


   
	public get tipo(): number {
		return this._tipo;
	}

   
	public set tipo(value: number) {
		this._tipo = value;
	}


    //Método Auxiliar

    public visualizar():void{

        let tipo: string;

        switch(this._tipo){
            case 1:
                tipo = "Entrega";
            break;
            case 2:
                tipo = "Retirada no Balcão";
			break;
			default:
				tipo = "Invalido!!"
        }


        console.log("\n************************************");
        console.log("        DADOS DO PEDIDO              ");
        console.log("************************************");
        console.log(`Número do Pedido: ${this._id}`);
        console.log(`Nome do Cliente: ${this._cliente}`);
        console.log(`Nome do Prato: ${this._prato}`);
        console.log(`Bebida: ${this._bebida}`);
        console.log(`Qual tipo: ${this._tipo}`);
        console.log(`Valor: R$ ${this._valor.toFixed(2)}`);
    }


}