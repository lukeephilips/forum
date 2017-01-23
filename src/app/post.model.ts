export class Post {
  constructor(public title: string, public category: string, public content: string, public date: Date, public image: string, public id: number){}
  public rating: number = 0;
  public idCounter: number = 5;
  incrementId() {
    this.idCounter += 1;
  }
}
