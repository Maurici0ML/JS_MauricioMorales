//Variables de las que depende el tamaño de la matriz.
const LARGO = Math.floor(Math.random()*10) + 1;
const ANCHO = Math.floor(Math.random()*10) + 1;

//Variables para número de fibonacii.
let f1=1; 
let f2=0;
let f3=0;

console.log('largo: '+LARGO);
console.log('ancho: '+ANCHO);

//Fors anidados que crean la matriz y asignan los números de fibonacci.
matriz=[];
for(let i=0; i<LARGO; i++)
{
    matriz[i]= new Array();
    //Condicion que checa si es par, para  comenzar a poner los numeros desde el inicio hasta el final del arreglo (izquierda a derecha).
    if(i % 2 == 0)
    {
       for(let j=0; j<ANCHO; j++)
        {
            //Condicion que permite poner el 1 al inicio de la matriz.
            if(i == 0 && j == 0)
            {
                matriz[i][j]=1;
            }
            else
            {
                //Operaciones para lograr conseguir la suceción de fibonacci.
                f3=f1+f2;
                //Asignación del numero correspondiente de la suceción de fibonacci, a la matriz.
                matriz[i].push(f3); //Se usa push para que valla agregando los nuevos números al final del arreglo (izquierda a derecha).
                f2=f1;
                f1=f3;
            }
        } 
    }
    //Si es impar, pone los numeros del final del arreglo, hacia el inicio (derecha a izquierda).
    else
    {
        for(let j=ANCHO; j>0; j--)
        {
            f3=f1+f2;
            //Asignación del numero correspondiente de la suceción de fibonacci, a la matriz.
            matriz[i].unshift(f3); //Se usa unshift para que valla agregando los nuevos números al inicio del arreglo (derecha a izquierda).
            f2=f1;
            f1=f3;
        }
    }
}

/*POSDATA: primero le habia dado la vuelta al problema, ya que en la matriz los numeros quedaban siempre de izauierda a derecha,
entonces, haciendo esto de acá abajo lo solucionaba, pero no me sentí satisfecho y lo hice bien XD.
Mi pregunta es.. Si lo hubiera hecho así, ¿hubiera obtenido la misma calificacion que arriba?*/

//For que recorre los indices de la matriz
/*for(indice in matriz)
{
    //Condicion que invierte el arreglo en el que el indice es impar.
    if(indice % 2 != 0)
    {
        matriz[indice].reverse();
    }
}*/

console.log(matriz);