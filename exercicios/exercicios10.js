
const nome  = prompt("como voce se chama?");
const idade = Number(prompt("Qual idade possui?"));
const nota1 = Number(prompt("Digite a primeira nota:"));
const nota2 = Number(prompt("Digite a segunda nota:"));

// Cálculo pra média
const media = (nota1 + nota2) / 2;

// Verificações
const maioridade = idade >= 18 ? "Maior de idade" : "Menor de idade";
const situacao   = media >= 7   ? "Aprovado"       : "Reprovado";

// resultado
console.log("===== CADASTRO =====");
console.log("Nome: "     + nome);
console.log("Idade: "    + idade + " → " + maioridade);
console.log("Média: "    + media);
console.log("Situação: " + situacao);