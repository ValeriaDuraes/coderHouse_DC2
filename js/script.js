let valorCompra = prompt ("Insira o valor da mercadoria: ");
let icms = (1 - 0.12);
let valorTotal = (valorCompra,icms)=>{ return valorCompra / icms}; 
let valorIcms = (valorTotal) => valorTotal - valorCompra;

console.log(valorTotal(valorCompra,icms));
console.log(valorIcms(valorTotal(valorCompra,icms)));
prompt("O valor do icms é R$ "+(valorIcms(valorTotal(valorCompra,icms))).toFixed(2) +" e o valor total da compra é R$ " + valorTotal(valorCompra,icms).toFixed(2));


