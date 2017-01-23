export class Post {
  constructor(public title: string, public category: string, public content: string, public date: Date, public image: string, public id: number){}
  public score: number = 0;

  incrementScore() {
    this.score += 1;
  }
  decrementScore() {
    this.score -= 1;
  }
}
