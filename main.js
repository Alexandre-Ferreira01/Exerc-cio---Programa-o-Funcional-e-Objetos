import { Exams } from "./exam.js";


const prova = new Exams([
  { id: 1, weight: 2, answer: "a" },
  { id: 2, weight: 2, answer: "b" },
  { id: 3, weight: 2, answer: "a" },
  { id: 4, weight: 2, answer: "c" },
  { id: 5, weight: 2, answer: "d" }
]);


const respostasAluno = {
  1: "a",
  2: "b",
  3: "b",
  4: "b",
  5: "b"
};


const tabela = document.getElementById("tabela");

prova.questions.forEach(q => {
  tabela.innerHTML += `
    <tr>
      <td>${q.id}</td>
      <td>${q.weight}</td>
      <td>${q.answer}</td>
      <td>${respostasAluno[q.id]}</td>
    </tr>
  `;
});


document.getElementById("btn").addEventListener("click", () => {
  const nota = prova.grade(respostasAluno);
  document.getElementById("resultado").innerText =
    `Nota final do aluno: ${nota.toFixed(1)}`;
});