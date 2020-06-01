export class QuestionData {

  public question_id: Number;
  public question: String;
  public option: Option;
  public answer: String;
  public description: String;

  constructor() {
      this.question_id = -1;
      this.question = "";
      this.option = new Option();
      this.answer = "";
      this.description = "";
  }
}

class Option {
  a: String;
  b: String;
  c: String;
  d: String;

  constructor() {
      this.a = "";
      this.b = "";
      this.c = "";
      this.d = "";
  }
}
