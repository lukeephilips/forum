export class Post {
  constructor(public title: string, public category: string, public content: string, public date: Date, public id: number){}
  public rating: number = 0;
}
