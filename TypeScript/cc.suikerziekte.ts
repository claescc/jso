class SuikerSpiegel {
    private bloedwaarden:Array<number> =[];
    private _date: Date;
    constructor(private dag: number, private maand: number, private jaar:number){ 
         this._date = new Date(jaar, maand, dag);
    };
    getDate(){
        return this._date.toLocaleDateString();
    //let date = this.dag + '/' + this.maand + '/' + this.jaar; 
    //return date;
    }
    noteer(metingNr:number, waarde:number){
        this.bloedwaarden[metingNr] = waarde;
    }
    aantalHypos(): number{
        let hypos = 0;
        for(let i = 0; i <this.bloedwaarden.length; i++){
            if (this.bloedwaarden[i] < 60){
             hypos++;
            }
        }
        return hypos;
    }
    aantalHypers(): number{
        let hypers = 0;
        for(let i = 0; i <this.bloedwaarden.length; i++){
            if (this.bloedwaarden[i] > 250){
             hypers++;
            }
        }
        return hypers;
    }
    isHypo(index: number): boolean{
        if (this.bloedwaarden[index] < 60){
            return true
        }else{
            return false;
        }
    }
    isHyper(index: number): boolean{
        if (this.bloedwaarden[index] > 250){
            return true
        }else{
            return false;
        }
    }
}

let suiker: SuikerSpiegel = new SuikerSpiegel(1,1,2018); // 5 = juni 

suiker.noteer(3, 210);
suiker.noteer(1, 45); 
suiker.noteer(4, 260);
suiker.noteer(2, 40);
suiker.noteer(0, 255);
suiker.noteer(5, 59);
console.log("Hypers: "+ suiker.aantalHypers());
console.log("Hypos: " +suiker.aantalHypos())
console.log("is Hypo?" ,suiker.isHypo(1));
console.log("is Hyper?" ,suiker.isHyper(4));
console.log(suiker.getDate());