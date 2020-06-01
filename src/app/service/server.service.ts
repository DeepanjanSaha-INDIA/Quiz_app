import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { QuestionData } from '../model/question-data';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private totalQuestionUrl = "http://localhost:9000/api/getQuestionaire";
  private questions: QuestionData[] = [];

  private questionBehaviourSubject = new BehaviorSubject<QuestionData[]>(this.questions);
  questionObservable = this.questionBehaviourSubject.asObservable();

  constructor(private http: HttpClient) { }

  /**
   * getTotalQuestion
   */
  getTotalQuestion() {
    return this.http.get<QuestionData[]>(this.totalQuestionUrl).subscribe(data => {
      this.questions = data;
      console.log(this.questions);
      this.questionBehaviourSubject.next(this.questions);
    });
  }
}
