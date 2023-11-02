const valor = Number(prompt("Insira o valor da parcela em R$"));
const parcelas = Number(prompt("Insira o número de parcelas: "));
const valorParcelas = Math.floor(valor / parcelas);
const valorFinal = valorParcelas + (valor % parcelas);

for (let i = 1; i < parcelas; i++) {
  console.log(`${i}ª parcela: R$${valorParcelas.toFixed(2)}`);
}
console.log(`${num}ª parcela parcela: R$${valorFinal.toFixed(2)}`);
