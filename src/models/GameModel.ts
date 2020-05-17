export class Game {
  id: number;
  name: string;
  date: Date;
  game: string;
  method: string;
  sendPlayerMessage: string;
  startLink: string;

  constructor(
    id: number,
    name: string,
    date: Date,
    game: string,
    method: string,
    sendPlayerMessage: string,
    startLink: string
  ) {
      this.id = id;
      this.name = name;
      this.date = date;
      this.game = game;
      this.method = method;
      this.sendPlayerMessage = sendPlayerMessage;
      this.startLink = startLink;
  }
}
