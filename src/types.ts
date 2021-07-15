
export type Order = {
  number: number;
  cookStart: Date;
  cookFinish?: Date;
  pick?: Date;
  deliver?: Date;
}
