export type DataEntry = {
  id: string;
  title: string;
  date: Date;
};

export type DataResponse = {
  [key: string]: DataEntry[];
};




export default class DataProvider {
  public fetch(): Promise<DataResponse> {
    return new Promise((resolve) => {
      resolve({
        done: [...Array(this._randomNumber())].map(() => {
          return {
            id: this._uuid(),
            title: this._randomTitle(),
            date: this._randomDate(),
          };
        }),
        not_done: [...Array(this._randomNumber())].map(() => {
          return {
            id: this._uuid(),
            title: this._randomTitle(),
            date: this._randomDate(),
          };
        }),
        dropped: [...Array(this._randomNumber())].map(() => {
          return {
            id: this._uuid(),
            title: this._randomTitle(),
            date: this._randomDate(),
          };
        }),
      });
    });
  }


  private _randomNumber(range = 10) {
    return Math.floor(Math.random() * range) + 1;
  }

  private _uuid(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  private _randomDate() {
    const start = new Date(2012, 0, 1);
    const end = new Date();
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  private _randomTitle() {
    const words = [
      'The sky',
      'above',
      'the port',
      'was',
      'the color of television',
      'tuned',
      'to',
      'a dead channel',
      '.',
      'All',
      'this happened',
      'more or less',
      '.',
      'I',
      'had',
      'the story',
      'bit by bit',
      'from various people',
      'and',
      'as generally',
      'happens',
      'in such cases',
      'each time',
      'it',
      'was',
      'a different story',
      '.',
      'It',
      'was',
      'a pleasure',
      'to',
      'burn',
    ];

    let n = 1000;
    let sentence = '';
    while (n--) {
      sentence += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return sentence;
  }
}
