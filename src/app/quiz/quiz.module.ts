import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizComponent } from './quiz.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [QuizComponent],
  exports: [QuizComponent]
})
export class QuizComponentModule {}
