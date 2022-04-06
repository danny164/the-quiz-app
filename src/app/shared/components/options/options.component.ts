import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { Answer } from '@app/shared/models';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit, AfterViewInit {
  @Input() option: string;
  @Input() answers: Answer[] = [];
  @Output() selectAnswer = new EventEmitter<any>();

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.answers);
  }

  ngOnInit(): void {}

  chooseAnswer(ev: any, ans: Answer, index: number) {
    ans.isTicked = true;
    this.selectAnswer.emit(this.answers);
  }
}
