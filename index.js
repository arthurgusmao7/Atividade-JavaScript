const nome = "Arthur";
const idade = 17;
const curso = "Desenvolvimento de Sistemas";

const nota1 = 8;
const nota2 = 9;
const nota3 = 7;

const faltas = 5;
const matriculado = true;

console.log("CADASTRO DO ALUNO");
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Curso:", curso);
console.log("Nota 1:", nota1);
console.log("Nota 2:", nota2);
console.log("Nota 3:", nota3);
console.log("Faltas:", faltas);
console.log("Matriculado:", matriculado);

const media = (nota1 + nota2 + nota3) / 3;

console.log("Média:", media.toFixed(2));


let situacao;

if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 5) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}

console.log("Situação:", situacao);

const totalAulas = 40;
const aulasFrequentadas = totalAulas - faltas;
const frequencia = (aulasFrequentadas / totalAulas) * 100;

console.log("Frequência:", frequencia + "%");

if (frequencia >= 75) {
    console.log("Frequência mínima atingida.");
} else {
    console.log("Frequência mínima não atingida.");
}

let resultadoFinal;

if (media >= 7 && frequencia >= 75 && matriculado === true) {
    resultadoFinal = "Aprovado nos critérios finais";
} else {
    resultadoFinal = "Não aprovado nos critérios finais";
}

console.log("RELATÓRIO FINAL");
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Curso:", curso);
console.log("Média:", media.toFixed(2));
console.log("Frequência:", frequencia + "%");
console.log("Situação acadêmica:", situacao);
console.log("Resultado final:", resultadoFinal);