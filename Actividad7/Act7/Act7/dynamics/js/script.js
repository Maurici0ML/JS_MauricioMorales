$(document).ready(function() {
    //Peticion que despliega la tabla entera.
    $(".results").load("./dynamics/php/Consultas.php");
    
    //Evento que detecta cuando hicimos click en el boton de enviar.
    $(".submitcarr").click(()=>{
        let busqueda =$("input").val();     //Variable que almacena el valor del input (la carrera que deseamos buscar).

        //Peticion ajax en donde se envia por metodo post la carrera que deseamos buscar.
        let peticion = $.ajax({
            url: "./dynamics/php/Consultas.php", 
            data: {busq: busqueda},
            method:"POST"
        });
        //Si todo esta correcto, despliega el resultado de la busqueda en el div.results
        peticion.done((resp)=>{
            $(".results").html(resp);
        });
        //Si algo falló, manda un alert que nos lo comunica.
        peticion.fail(()=>{
            alert("Algo salió mal en la petición");
        });
    });
    //Evento que detecta cuando hicimos un cambio en el select de modalidad.
    $(".filtmod").on('change', ()=>{
        let filtro = $(".filtmod").val();   //Variable que almacena el valor del select (la modalidad).

        //Peticion ajax en donde se envia por metodo post la carrera que deseamos buscar.
        let peticion = $.ajax({
            url: "./dynamics/php/Consultas.php", 
            data: {dato: filtro},
            method:"POST"
        });
        //Si todo esta correcto, despliega el resultado de la busqueda en el div.results
        peticion.done((resp)=>{
            $(".results").html(resp);
        });
        peticion.fail(()=>{
            //Si algo falló, manda un alert que nos lo comunica.
            alert("Algo salió mal en la petición.");
        });
    });
});
