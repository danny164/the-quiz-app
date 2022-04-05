import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GridDataModel } from '../models/grid-data.model';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private apiUrl = 'https://opentdb.com/api.php?amount=10&type=multiple';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<GridDataModel<Question>> {
    return this.http.get<GridDataModel<Question>>(this.apiUrl);
  }
}
