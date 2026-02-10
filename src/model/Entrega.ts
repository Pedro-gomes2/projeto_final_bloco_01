import { formatarMoeda } from "../util/Currency";
import { Geral } from "./Geral";

export class Entrega extends Geral{
     
    // Atributos da Classe
    private _enderaco: string;
    private _txdeentrega:number;

    // Método Construtor
	constructor(id: number, cliente: string, prato: string, bebida: string, valor: number, tipo:number,enderaco: string, txdeentrega: number) {
		super(id,cliente,prato,bebida,valor,tipo);
        this._enderaco = enderaco;
		this._txdeentrega = txdeentrega;
	}


     //Método Get e Set     
	public get enderaco(): string {
		return this._enderaco;
	}

  
	public set enderaco(value: string) {
		this._enderaco = value;
	}

    
	public get txdeentrega(): number {
		return this._txdeentrega;
	}

   
	public set txdeentrega(value: number) {
		this._txdeentrega = value;
	}
    
    //Método Auxiliar
    public visualizar(): void {
        super.visualizar();
        console.log(`Endereço: ${this._enderaco}`)
        console.log(`Valor da taxa: ${formatarMoeda(this._txdeentrega )}`);
    }
    






}

