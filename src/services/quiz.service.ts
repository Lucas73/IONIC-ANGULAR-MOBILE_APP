import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizObject = [{'id':'1', 'question':'¿En qué artista se inspiró el descubridor de los restos de un dinosaurio para ponerle su nombre?', 'answer1':'Mick Jagger', 'answer2':'Freddy Mercury', 'answer3':'Cher', 'correctAnswer':'1'},{'id':'2', 'question':'¿Qué famoso cantante lideraba un grupo llamado Aristogatos?', 'answer1':'Nacho Cano', 'answer2':'Mikel Erentxun', 'answer3':'Marta Sánchez', 'correctAnswer':'2'},{'id':'3', 'question':'¿Qué famoso cantante puso este anuncio: “Se buscan rockeros para montar banda de rock. Abstenerse hippies”?', 'answer1':'Alice Cooper', 'answer2':'Joan Jett', 'answer3':'Loquillo', 'correctAnswer':'3'},{'id':'4', 'question':'¿Qué artista de raza negra posee la nacionalidad suiza?', 'answer1':'Aretha Franklin', 'answer2':'Whitney Houston', 'answer3':'Tina Turner', 'correctAnswer':'3'},{'id':'5', 'question':'¿Quién escribió una canción al coche Mercedes Benz?', 'answer1':'Janis Joplin', 'answer2':'Bruce Springsteen', 'answer3':'Jon Bon Jovi', 'correctAnswer':'1'}]

  constructor() { }


  checkAnswered(id,correctAnswer){
    for (let i=0;i<this.quizObject.length;i++){
      if (this.quizObject[i]['id']==id && this.quizObject[i]['correctAnswer']==correctAnswer){
        return true;
      }
    }
  }

}
