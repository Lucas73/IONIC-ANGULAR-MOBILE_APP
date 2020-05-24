import { Component, OnInit, Injectable } from '@angular/core';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})

@Injectable()
export class QuizComponent implements OnInit {


  constructor(private quizService: QuizService) { }

  ngOnInit() {}

  // console.log(this.quizService.quizObject.id1.question)

  checkAnswer(id,answer){
    this.quizService.checkAnswered(id,answer)
  }

}

