let numeroDeAlunos = 10;

let contador = 0;

while(contador <= numeroDeAlunos) {
        //console.log(contador)

    if(contador == 0){
        console.log("O numero atual é zero")
    } else if(contador % 2 == 0){
        console.log("O numero" + contador + "é par")
    }else{
        console.log(`O numero ${contador} é impar`)
    }
    contador++;
}