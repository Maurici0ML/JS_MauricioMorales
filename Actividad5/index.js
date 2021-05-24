//Variables que guardan los colores.
let arreglo = [];
let arreglo2 = [];

//Funcion que genera un numero aleatorio del 1 al 4, y con estos cambia los colores del tablero. Devuelve el color que se cambio en una cadena.
function color(){
    let color = Math.floor(Math.random()*10) % 4 + 1;

    switch(color)
    {
        case 1:
            color = 'amarillo';
            colorClaro = 'yellow';
            colorOscuro = 'gold';
            break;

        case 2:
            color = 'verde';
            colorClaro = 'limegreen';
            colorOscuro = 'green';
            break;

        case 3:
            color = 'azul';
            colorClaro = 'cyan';
            colorOscuro = 'blue';
            break;

        case 4:
            color = 'rojo';
            colorClaro = 'coral';
            colorOscuro = 'red';   
            break;
    }

    document.getElementById(color).style.backgroundColor = colorClaro;
    //Timer que devuelve a su color original, borrando el cambio en el HTML.
    setTimeout(()=>{
        document.getElementById(color).removeAttribute('style');
    }, 900);
    return color;
}


//Funcion comparar, que recibe la tirada en la que se encuentra el jugador y la emplea como indice paara comparar las posiciones en los arreglos.
function comparar(indice){

    //Condicion que determina si el jugador acertó, es decir, que el arreglo de las respuestas coincida con el arreglo de los colores aleatorios.
    if(arreglo[indice] === arreglo2[indice])
    {
        //Si el indice es 4 (5 tiradas), quiere decir que el jugador ganó
        //Por lo tanto, crea un elemento donde dice que ganaste, además remueve el tablero de los colores.
        if(indice === 4)
        {
            let body = document.querySelector('body');
            let botones = document.getElementById('botones');
            body.removeChild(botones);
            let ganaste = document.createElement('div');
            ganaste.style.textAlign = 'center';
            ganaste.innerHTML = '<h1>•Ganaste, master•</h1>';
            ganaste.style.color = 'white';
            ganaste.style.fontFamily = 'sans-serif';
            ganaste.style.fontSize = '2em';
            body.appendChild(ganaste);
        }
    }
    //Si se equivoco, crea un elemento que dice que perdió y además remueve el tablero de los colores.
    else
    {
        //console.log('perdiste');
        let body = document.querySelector('body');
        let botones = document.getElementById('botones');
        body.removeChild(botones);
        let perdiste = document.createElement('div');
        perdiste.innerHTML = '<h1>Chin, perdiste :(</h1>';
        perdiste.style.textAlign = 'center';
        perdiste.style.color = 'white';
        perdiste.style.fontFamily = 'sans-serif';
        perdiste.style.fontSize = '2em';
        body.appendChild(perdiste);

        //DESAPARECER EL TABLERO CON LOS COLORES Y BOTONES.
    }
}

//Evento que detecta cuando ya se cargo completamente la página.
window.addEventListener('load', ()=>{

    //Guardando los botones en constantes.
    const jugar = document.getElementById('jugar');
    const amarillo = document.getElementById('amarillo');
    const verde = document.getElementById('verde');
    const azul = document.getElementById('azul');
    const rojo = document.getElementById('rojo');
    let i =0; //Variable que nos permite llevar el control de los indices de los arreglos a comparar.

    //Evento que desencadena los demás eventos al presionar JUGAR
    jugar.addEventListener('click', ()=>{

        //Seccion que desaparece el boton de jugar al haber hecho click en jugar.
        let body = document.querySelector('body');
        body.removeChild(jugar);

        // 5 Callbacks que cada segundo, cambian de manera pseudo aleatoria los colores con ayuda de la funcion "color".
        //Y guardan en un arrego los colores que se cambiaron.
        console.log('Jugar');
        setTimeout(() => {
            arreglo.push(color());
            setTimeout(()=>{
                arreglo.push(color());
                setTimeout(()=>{
                    arreglo.push(color());  
                    setTimeout(()=>{
                        arreglo.push(color());
                        setTimeout(()=>{
                            arreglo.push(color());
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);

        //Eventos que detectan el click.
        //Llaman a la funcion comparar, para saber si el jugador acerto o se equivoco.
        //Se apoyan de la variable "i" para saber en que intento se encuentra, y asi de esa forma, comparar ese indice en los arrelos, con la funcion "comparar".
        //El if sirve para dejar de sumar los intentos cuando llegan a 5, ya que esos son los pasos aleatorios que se llevan a cabo.
        amarillo.addEventListener('click', ()=>{
            arreglo2.push('amarillo');
            comparar(i);
            if(i<5)
                i++;
        });
        
        verde.addEventListener('click', ()=>{
            arreglo2.push('verde');
            comparar(i);
            if(i<5)
                i++;
        });

        azul.addEventListener('click', ()=>{
            arreglo2.push('azul');
            comparar(i);
            if(i<5)
                i++;
        });

        rojo.addEventListener('click', ()=>{
            arreglo2.push('rojo');
            comparar(i);
            if(i<5)
                i++;
        });
    });
});
