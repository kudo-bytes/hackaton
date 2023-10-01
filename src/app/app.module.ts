import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { QuestionsComponent } from './components/questions/questions.component';
import { VideosComponent } from './components/videos/videos.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { EvaluationComponent } from './components/evaluation/evaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    VideosComponent,
    EvaluationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
