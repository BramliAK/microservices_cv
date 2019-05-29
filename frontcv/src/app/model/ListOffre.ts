export class ListOffre {

    public titre: string;
    public description: string;
    public type: Array<string>;
    public nomentrepise: string;
    public idClient? : number;
    public idemploit?: number;


  constructor(titre,description,type,nomentrepise,idclient) {  }

}