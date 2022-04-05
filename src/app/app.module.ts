import { HttpClientModule } from '@angular/common/http';
import { NgModule, Sanitizer } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuestionComponent } from './pages/question/question.component';
import { SharedModule } from './shared/shared.module';
import { NgDompurifyModule, NgDompurifySanitizer } from '@tinkoff/ng-dompurify';

@NgModule({
  declarations: [AppComponent, HomeComponent, QuestionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgDompurifyModule,
  ],
  providers: [
    {
      provide: Sanitizer,
      useClass: NgDompurifySanitizer,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
