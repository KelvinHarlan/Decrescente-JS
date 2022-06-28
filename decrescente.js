//Faça um Programa que leia três números e mostre-os em ordem decrescente.
function decrescente() {
    numeros.sort((a, b) => b - a);
    console.log(numeros)
}
decrescente(numeros = [5, 8, 10])