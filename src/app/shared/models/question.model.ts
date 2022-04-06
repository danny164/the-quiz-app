export class Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];

  answers: Answer[] = [];

  public constructor(init?: Partial<Question>) {
    Object.assign(this, init);
  }
}

export class Answer {
  isTicked: boolean = false;
  answer: string;

  public constructor(init?: Partial<Answer>) {
    Object.assign(this, init);
  }
}
