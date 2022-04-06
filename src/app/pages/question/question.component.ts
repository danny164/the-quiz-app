import { Component, OnInit } from '@angular/core';
import { QuestionService } from '@app/services';
import { Question, Answer } from '@app/shared/models';
import { interval } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  counter: number = 30;

  name: string = '';
  progress: string = '0';
  points: number = 0;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  currentIndexQuestion: number = 0;
  _interval: any;

  questionList: Question[] = [];
  isCorrectAnswer: boolean = false;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name') || 'User';
    this.getAllQuestions();
    this.startCounter();
  }

  getAllQuestions() {
    this.questionService.getQuestions().subscribe((res) => {
      this.questionList = res.results;
      this.handleGenerateAnswer();
    });
  }

  handleGenerateAnswer() {
    this.questionList.map((question) => {
      question.incorrect_answers.push(question.correct_answer);

      question.answers = [];
      question.incorrect_answers.map((e) => {
        const answer = new Answer({ answer: e });

        question.answers.push(answer);
      });

      // Random answers
      question.answers.sort(() => 0.5 - Math.random());
    });
  }

  selectAnswer(e: any) {
    if (this.currentIndexQuestion >= this.questionList.length - 1) {
      this.calPoints();
      return;
    }

    this.currentIndexQuestion++;
    this.getProgressPercent();
  }

  // calculate points
  calPoints() {
    const POINT = 10;
    this.questionList.map((e) => {
      const answer = e.answers.find((_) => _.isTicked);

      if (e.correct_answer === answer.answer) {
        this.points += POINT;
        this.correctAnswer++;
      } else {
        this.inCorrectAnswer++;
      }
    });
  }

  startCounter() {
    const SECONDS = 30;
    const MILISECONDS = SECONDS * 1000;

    this._interval = interval(1000).subscribe((_) => {
      this.counter--;
    });

    setTimeout(() => {
      this._interval.unsubscribe();

      if (this.counter === 0) {
        this.currentIndexQuestion++;
        this.counter = SECONDS;
      }
    }, MILISECONDS);
  }

  resetQuiz() {
    this._interval.unsubscribe();
    this.getAllQuestions();
    this.points = 0;
    this.currentIndexQuestion = 0;
    this.progress = '0';
  }

  getProgressPercent() {
    this.progress = (
      ((this.currentIndexQuestion + 1) / this.questionList.length) *
      100
    ).toString();
  }
}

// dirty: string = `<p style="color: red;"> HELLO <iframe//src=JavaScript:alert&lpar;1)></ifrAMe><br>goodbye</p>`;
