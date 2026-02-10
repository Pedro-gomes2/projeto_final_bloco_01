import { Geral } from "./Geral";

export class Balcao extends Geral{

    // Atributos da Classe
    private _hrderetirar: number;

    // Método Construtor
	constructor(id: number, cliente: string, prato: string, bebida: string, valor: number, tipo:number,hrderetirar: number) {
		super(id,cliente,prato,bebida,valor,tipo);
        this._hrderetirar = hrderetirar;
	}

    //Método Get e Set 
	public get hrderetirar(): number {
		return this._hrderetirar;
	}

    
	public set hrderetirar(value: number) {
		this._hrderetirar = value;
	}


    //Método Auxiliar
    public visualizar(): void {
        super.visualizar();
        console.log(`Horario de Retirada: ${this._hrderetirar}`)
    }
    



}