//1

function olaMundo(){
    console.log('Olá Mundo!');
}

olaMundo();

//2

function olaNome(nome){
    console.log(`Olá, ${nome}`);
}

olaNome('João');

//3

function numeroDobro(numero){
    //return console.log(parseInt(numero * 2));
    return numero * 2;
}

let resultadoDobro = numeroDobro(5);
console.log(resultadoDobro);

//4

function numeroMedia(n1, n2, n3){
    //return console.log(parseInt((n1 + n2 + n3)/3));
    return (n1 + n2 + n3) / 3;
}

let media = numeroMedia(4, 7, 10);
console.log(media);

//5

function numeroMaior(num1, num2){
   // if(num1 > num2){
   //     console.log(num1);
   // }else{
   //     console.log(num2);
   // }

   return num1 > num2 ? num1 : num2;
   //se num1 for maior que num2 então num1, caso contrário num2 (Operador Ternário)
}

let maiorNumero = numeroMaior(15, 9);
console.log(maiorNumero);

//6

function numeroMult(numero2) {
    //return console.log(numero2 * numero2);

    return numero2 * numero2;
}

let resultado = numeroMult(2);
console.log(resultado);