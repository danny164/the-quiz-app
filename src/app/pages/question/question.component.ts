import { Component, OnInit } from '@angular/core';
import { QuestionService } from '@app/services';
import { Question } from '@app/shared/models';
import { DomSanitizer, SafeValue } from '@angular/platform-browser';
import { Inject, SecurityContext } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  public name: string = '';
  questions: Question[] = [];

  // dirty: string = `<p style="color: red;"> HELLO <iframe//src=JavaScript:alert&lpar;1)></ifrAMe><br>goodbye</p>`;

  constructor(
    private questionService: QuestionService,
    @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name') || 'User';
    this.getAllQuestions();
  }

  unwrap(value: SafeValue | null): string {
    return this.sanitizer.sanitize(SecurityContext.HTML, value) || '';
  }

  getAllQuestions() {
    this.questionService.getQuestions().subscribe((res) => {
      this.questions = res.results;
    });
  }
}
