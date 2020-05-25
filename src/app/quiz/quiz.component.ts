import { Component, OnInit, Injectable } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { PopoverController } from '@ionic/angular';

import { PopoverComponent } from '../popover/popover.component'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})

@Injectable()
export class QuizComponent implements OnInit {
  answer:string;


  constructor(private popoverController:PopoverController, private quizService: QuizService) { }

  ngOnInit() {}

  // console.log(this.quizService.quizObject.id1.question)

  checkAnswer(id, answer){
    if(this.quizService.checkAnswered(id, answer)){
      this.answer = 'Correcto'
      this.openPopover('CORRECTO!!!');
    }else{
      this.answer = 'Incorrecto. Prueba de Nuevo.'
      this.openPopover('OOPS! Incorrecto');
    }
  }
  async openPopover(e:any){
          const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: e,
      translucent: true,
      cssClass: 'pop-over-style',
      componentProps:{
        values: {value: e}
      }
    });
    return await popover.present();

  }

}

