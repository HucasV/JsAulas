//função simples (questão 1)
const nome = "Hudson";
const idade = 18;
const cidade = "Registro";

function showInfo(nome, idade, cidade) {
  document.write(
    `<p> Nome: ${nome} </p> <p> Idade: ${idade} </p> <p> Cidade: ${cidade} </p>`,
  );
}

showInfo(nome, idade, cidade);

// dividir (questão2)
const n1 = 40;
const n2 = 2;
function dividir(n1, n2) {
  const divi = n1 / n2;

  document.writeln(`<p> O resultado da divisão foi.. ${divi}`);
}

dividir(n1, n2);

//multplicar tarefa 3

function multi(n1, n2) {
  return n1 * n2;
}

document.writeln(`<p> O resultado da multiplicação foi.. ${multi(n1, n2)}`);

//  atividade 4, maior ou menor de idade

const maiorIdade = 18;

function verificarIdade(maiorIdade) {
  if (maiorIdade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}
var resultado1 = verificarIdade(maiorIdade);
document.writeln(`<p> ${resultado1} </p>`);

// atividade 5 (function anonima)

const media = function (n1, n2) {
  return (n1 + n2) / 2;
};

let nota1 = 6;
let nota2 = 1;

function nota() {
  if (media(nota1, nota2) >= 5) {
    document.writeln("Aprovado");
  } else {
    document.writeln("Reprovado");
  }
}
nota();

// atividade 6 (tiplicar com arrow 1 numero)
const triplo = (a) => {
  return eval(`${a * 3}`);
};
document.write(`<p> o triplo é: ${triplo(1000)}`);

// atividade 7 (somar com arrow 4 numeros)
const somas = (a, b, c ,d) => {
  return eval(`${a + b + c + d}`);
};
document.write(`<p> o resultado da operação é: ${somas(1, 50, 67, 3)}`);