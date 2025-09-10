import { Comune } from "./comune";

export interface Provincia{
    code:string;
    comuni:Comune[];
    nome:string;

    
}