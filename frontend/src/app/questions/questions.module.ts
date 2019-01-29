import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddQuestionComponent } from './add-question/add-question.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions/questions.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuestionsRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [QuestionsComponent, AddQuestionComponent],
  providers: []
})
export class QuestionsModule { }
