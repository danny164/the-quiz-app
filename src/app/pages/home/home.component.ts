import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('name') userName!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  startQuiz() {
    localStorage.setItem('name', this.userName.nativeElement.value);
  }
}
