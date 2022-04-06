import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input() points: number;
  @Input() correctAnswer: number;
  @Input() inCorrectAnswer: number;
  @Input() totalQuestions: number;

  constructor() {}

  ngOnInit(): void {}
}
