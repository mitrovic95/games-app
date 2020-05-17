export class UserPreference {
  playTimeDate: Date;
  playTimeStart: Date;
  playTimeEnd: Date;
  newPeople: boolean;

  constructor(
    playTimeDate: Date,
    playTimeStart: Date,
    playTimeEnd: Date,
    newPeople: boolean
  ) {
      this.playTimeDate = playTimeDate;
      this.playTimeStart = playTimeStart;
      this.playTimeEnd = playTimeEnd;
      this.newPeople = newPeople;
  }
}
