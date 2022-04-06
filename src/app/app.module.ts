import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgDompurifyModule } from '@tinkoff/ng-dompurify';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuestionComponent } from './pages/question/question.component';
import { SharedModule } from './shared/shared.module';
import { ResultComponent } from './pages/question/result/result.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, QuestionComponent, ResultComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgDompurifyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
