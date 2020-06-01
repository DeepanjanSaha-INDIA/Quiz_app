import { Component, OnInit } from '@angular/core';
import { ServerService } from '../service/server.service';
import { QuestionData } from '../model/question-data';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  private questions: QuestionData[] = [];
  private qno: number = 0;
  private option;
  private hasSubmitted: boolean = false;
  private isCorrect: boolean = false;
  private isResultOut: boolean = false;
  private correctAnswer = 0;

  constructor(private service: ServerService) { }

  next() {
    this.hasSubmitted = false;
    this.qno += 1;
    this.option = null;
  }

  submit() {
    console.log("results are out");
    this.isResultOut = true;
  }

  showAnswer() {
    if (this.hasSubmitted == false) {
      this.hasSubmitted = true;
      console.log(this.hasSubmitted);
      console.log(this.questions[this.qno].option[this.option])
      console.log(this.questions[this.qno].answer)
      console.log(this.questions[this.qno].option[this.option] == this.questions[this.qno].answer)

      if(this.questions[this.qno].option[this.option].toLowerCase().trim() == this.questions[this.qno].answer.toLowerCase().trim()) {
        this.correctAnswer += 1;
        this.isCorrect = true;
      } else {
        this.isCorrect = false;
      }
    }
  }

  radioChangeHandler(event: any) {
    this.option = event.target.value;
    console.log(this.option);
  }

  ngOnInit() {
    console.log(this.hasSubmitted);
    this.service.questionObservable.subscribe((data) => {
      console.log("in question")
      this.questions = data;
      console.log(this.questions);
    });
  }

}
