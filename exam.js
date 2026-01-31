export class Exams {
  constructor(questions) {
    
    this.questions = questions;
  }

  grade(studentAnswers) {
    
    let total = 0;

    for (const q of this.questions) {
      if (studentAnswers[q.id] === q.answer) {
        total += q.weight;
      }
    }

    return total;
  }
}