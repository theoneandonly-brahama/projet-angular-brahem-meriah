import { Commentaire } from "./commentaire"

export class Product {
    
    id?:string
    lib?:string
    photo?:string
    prix?:number
    nouv?:boolean
    date_dep?:Date
    date_rtr?:Date
    comments?:Commentaire[]
    cat?:string


    constructor(id?:string,
        lib?:string, 
        photo?:string, 
        prix?:number, 
        nouv?:boolean, 
        dated?:Date, 
        dater?:Date,
        cat?:string, 
        comments?:Commentaire[]
        ){
            
            

    }

    

}
