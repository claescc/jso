
export class Hero {
    id: number;
    name: string;
    beschikbaar: boolean;
    constructor(id: number, name: string,beschikbaar: boolean,) { 
      this.id = id;
      this.name = name;
      this.beschikbaar = beschikbaar;
    }
  }

export class Helden {
    static HEROES: Hero[] = [];

    static create() {
        Helden.HEROES.push(new Hero(1, 'Ironman', false));
        Helden.HEROES.push(new Hero(2, 'Batman', false));
        Helden.HEROES.push(new Hero(3, 'Spiderman', true));
        Helden.HEROES.push(new Hero(4, 'WonderWoman', false));
        Helden.HEROES.push(new Hero(5, 'Batman', false));
        Helden.HEROES.push(new Hero(6, 'DeadPool', true));
        Helden.HEROES.push(new Hero(7, 'Antman', true));
    }
}

Helden.create();



  