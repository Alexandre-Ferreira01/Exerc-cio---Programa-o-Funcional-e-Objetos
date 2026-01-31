import { VectorOps } from "./vector.js";

const ops = new VectorOps();

document.getElementById("btn").addEventListener("click", () => {
  const texto = document.getElementById("vetor").value;

  const vetor = texto.split(",").map(n => Number(n.trim()));

  const resultado = `
    <p>Soma (sum): ${ops.sum(vetor)}</p>
    <p>Soma dos ímpares (sumOdds): ${ops.sumOdds(vetor)}</p>
    <p>Produtório (product): ${ops.product(vetor)}</p>
  `;

  document.getElementById("resultado").innerHTML = resultado;
});