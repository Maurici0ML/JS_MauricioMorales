//Evento que detecta cuando ya se cargo la ventana.
window.addEventListener('load', ()=>{

    //Variables que nos permiten llevar a cabo los eventos.
    let dibujo = document.getElementById("dibus");  //Canvas
    let tipo = document.getElementById("tipo"); //Tipo de color de fondo
    
    //Evento que detecta cuando se cambio el select de tipo de color de fondo y nos permite cambiar si hay uno o dos iputs colors.
    tipo.addEventListener('change',()=>{

        //Variables.
        let tipoRell = document.getElementById("tipo").selectedIndex;   //Almacena el valor del select.
        let inputs = document.getElementById("inputColores");   //Es el contenedor donde se encuentran los imputs colors.
        let existe = document.getElementById("input2"); //Variable que comprueba si ya existe el elemento del segundo imput color.

        //Si el tipo de color de fondo es solido...
        if(tipoRell == 0)
        {
            //Comprueba si existe el segundo input color.
            if(existe != null)
            {
                inputs.removeChild(existe); //En caso de que si, lo elimina.
            }
        }

        //Si el tipo de color de fondo es degradado...
        else if(tipoRell == 1 || tipoRell == 2)
        {
            //Checa que no exista el segundo input color para poder crearlo y añadirlo al html
            if(existe == null)
            {
                let inputC2 = document.createElement("label");
                inputC2.setAttribute("for","color2");
                inputC2.setAttribute("id", "input2");
                inputC2.innerHTML = '<strong>Color de fondo </strong><input type="color" name="colordegra" id="color2">';
                inputs.appendChild(inputC2);
            }
        }
    });
    
    //Evento que detecta cuando se ha pulsado en el canvas.
    dibujo.addEventListener('click', ()=>{

        //Variables que nos permiten modificar el canvas.
        let canvas = document.getElementById("dibus");
        let ctx = canvas.getContext("2d");

        //Variables que almacenan el value del select.
        let figura = document.getElementById("figura").selectedIndex;   //Value de figuras.
        let tipoRell = document.getElementById("tipo").selectedIndex;   //Value de tipo de color de fondo.
        let color;  //Variable a la que se le asignara el color a futuro.

        //Condiciones que nos permiten dedicir el valor de la variable de color.

        //Si el tipo de color de fondo es solido...
        if(tipoRell == 0)
            color = document.getElementById("color").value; //Solo asigna el valor del unico input color que hay.
        
        //Si el tipo de color de fondo es lineal, nos asigna el perfil de color lineal.
        else if(tipoRell == 1)
        {
            let color1 = document.getElementById("color").value;
            let color2 = document.getElementById("color2").value;
            color = ctx.createLinearGradient(0, 25, 0, 375);
            color.addColorStop(0, color1);
            color.addColorStop(1, color2);
        }
        //Si el tipo de color de fondo es radial, nos asigna el perfil de color radial.
        else if(tipoRell == 2)
        {
            let color1 = document.getElementById("color").value;
            let color2 = document.getElementById("color2").value;
            color = ctx.createRadialGradient(200, 200, 25, 200, 200, 150);
            color.addColorStop(0, color1);
            color.addColorStop(1, color2);
        }

        //Switch que determina cual figura es la que se va a dibujar en el canvas.
        switch(figura)
        {
            //Paleta
            case 0:
                ctx.clearRect(25, 25, 350, 350);
                ctx.beginPath();
                    ctx.rect(100, 125, 200, 175);
                    ctx.arc(200, 125, 100, Math.PI*1, 0);
                    ctx.rect(175, 300, 50, 75);
                ctx.closePath();
                break;
            
            //Corona
            case 1:
                ctx.clearRect(25, 25, 350, 350);
                ctx.beginPath();
                    ctx.moveTo(50, 350)
                    ctx.lineTo(50, 100);
                    ctx.lineTo(150, 200);
                    ctx.lineTo(200, 50);
                    ctx.lineTo(250, 200);
                    ctx.lineTo(350, 100);
                    ctx.lineTo(350, 350);
                ctx.closePath();
                break;

            //Fantasma
            case 2:
                ctx.clearRect(25, 25, 350, 350);
                ctx.beginPath();
                    ctx.moveTo(100, 375);
                    ctx.lineTo(100, 275);
                    ctx.lineTo(25, 150);
                    ctx.lineTo(100, 200);
                    ctx.lineTo(100, 125);
                    ctx.arc(200, 125, 100, Math.PI*1, 0);
                    ctx.lineTo(300, 200);
                    ctx.lineTo(375, 150);
                    ctx.lineTo(300, 275);
                    ctx.lineTo(300, 375);
                    //Piquitos dek fantasma.
                    ctx.lineTo(275, 350);
                    let x = 275;
                    let y = 350;
                    for(let i=0; i<12; i++){
                        x-=12.5;
                        if(i%2 == 0)
                            y+=25;
                        else
                            y-=25;
                        ctx.lineTo(x, y);
                    }
                ctx.closePath();
                break;
        }

        //Renderizacion de las figuras y el color.
        ctx.fillStyle = color;
        ctx.fill();
    });
});