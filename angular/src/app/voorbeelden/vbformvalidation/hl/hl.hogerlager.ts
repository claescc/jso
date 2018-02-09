
export class HogerLager {
    public higherlower: string;
    public beurten = 0;
    public random: number;
    public guess = false;
    public guessArray = [];
    constructor() {
        this.random = Math.floor(Math.random() * 100) + 1;
       // console.log(this.random);
    }
    gok(gokk) {
        this.guessArray.push(gokk);
        this.beurten++;
        if (this.random == gokk) {
            this.guess = true;
           // console.log("the Same:", gokk);
            return "🎆JAWOEL DAS IST GOOOOD 🎆";
        } else if (this.random > gokk) {
          //  console.log("guess higher:", gokk);
            return "Nein du must HOGER spielen🔪!"
        } else {
           //  console.log("guess lower:", gokk);
            return "Nein nein das number ist LAGER🔪!"
        }
    }
    aantalbeurten(): number {
        return this.beurten;
    }
    //----------------------------------------------------------
   
    restart() {
        console.log('GAME RESTARTED');
        this.beurten = 0;
        this.random = Math.floor(Math.random() * 100) + 1;
        this.guess = false;
        this.higherlower = '';
        this.guessArray= [];
    }

}
