function saudacao(){
    console.log('Olá mundo')
}

saudacao()


    function saudacao1(nome){
        

        console.log(`Olá ${nome}`)
    }
saudacao("Danilo")
 



    function num(numero){
       return numero* 2
        

    }

    let resultadoDobro = num(5)
    console.log(resultadoDobro)


    function calculoMedia(num1,num2,num3){

        return (num1+num2+num3)/3

    }

    let media = calculoMedia(5,10,20)
    console(media)


    function CalculoMaior(a,b){
       return a>b? a : b;
    }

    let Maior = CalculoMaior(5,10)
    console.log(Maior)


    function multiplicar(M){
        return M*M

    }

    let quadrada = multiplicar(10)
    console.log(quadrada)