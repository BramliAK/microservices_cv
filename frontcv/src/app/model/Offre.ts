export class Offre {

    public titre: string;
    public description: string;
    public type: string;
    public nomentrepise: string;
    public nbrcondidature?:number;
    public idClient? : number;
    public idemploit?: number;
 


  constructor(titre,description,type,nomentrepise,idclient) {  }

}