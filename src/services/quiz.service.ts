import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizObject = [{'id':'1', 'question':'¿En qué artista se inspiró el descubridor de los restos de un dinosaurio para ponerle su nombre?', 'answer1':'Mick Jagger', 'answer2':'Freddy Mercury', 'answer3':'Cher', 'correctAnswer':'1'},{'id':'2', 'question':'¿Qué famoso cantante lideraba un grupo llamado Aristogatos?', 'answer1':'Nacho Cano', 'answer2':'Mikel Erentxun', 'answer3':'Marta Sánchez', 'correctAnswer':'2'}]

  constructor() { }


  checkAnswered(id,correctAnswer){
    for (let i=0;i<this.quizObject.length;i++){
      if (this.quizObject[i]['id']==id && this.quizObject[i]['correctAnswer']==correctAnswer){
        return true;
      }
    }
  }

}
