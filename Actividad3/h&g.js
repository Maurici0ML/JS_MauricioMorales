//Función que nos da el valor de la cookie
function valCookie(nombreCookie) 
{
    let cookies = document.cookie;
    let arrCookies=cookies.split("; ");

    //Ciclo que nos separa cada valor en el nombre, y en el valor de la cookie y lo va asignando a un arreglo.
    for(const valor of arrCookies)
    {
        //Separando el valor obtenido en 2, donde el indice 0 es el nombre de la cookie, y el 1 es el valor.
        const cookie = valor.split('=');
        //if que nos permite verificar si el nombre es el que buscamos.
        if (cookie[0] === nombreCookie)
            return cookie[1];
    }
    return null;
}

//Funcion que despliega el prompt para escribir la dirección 1.
function direccion1()
{
    //Ciclo do while que verifica que solo pasa al siguiente paso si escribieron "derecha" o "izquierda" o se cancela cuando es null (haber seleccionado cancelar en el prompt).
    do
    {
        //Prompt para preguntar la direccion.
        dir1 = prompt('Escriba \"Derecha\" o \"Izquierda\" según el camino que quiera elegir.');

        //Si se introdujo una direccion valida, lo guarda en la cookie y pasa a la funcion para la cookie 2.
        if(dir1 === 'Derecha' || dir1 === 'Izquierda')
        {
            document.cookie='direccion1='+dir1+';'+"expires="+fecha.toGMTString();
            setTimeout(direccion2, 1000);
        }
        //Si no, pide una direccion valida, solo en caso de que no sea null (haber seleccionado cancelar en el prompt).
        else
        {
            if(dir1 != null)
                alert('Dirección inválida, introduce \"Derecha\" o \"Izquierda\"');
        }
    }
    while(dir1 != 'Derecha' && dir1 != 'Izquierda' && dir1 != null);
}

//Funcion que despliega el prompt para escribir la dirección 2.
function direccion2()
{
    //Ciclo do while que verifica que solo pasa al siguiente paso si escribieron "derecha" o "izquierda" o se cancela cuando es null (haber seleccionado cancelar en el prompt).
    do
    {
        //Prompt para preguntar la direccion.
        dir2 = prompt('Escriba \"Derecha\" o \"Izquierda\" según el camino que quiera elegir.');

        //Si se introdujo una direccion valida, lo guarda en la cookie y pasa a la funcion para determinar el destino.
        if(dir2 === 'Derecha' || dir2 === 'Izquierda')
        {
            document.cookie='direccion2='+dir2+';'+"expires="+fecha.toGMTString();
            setTimeout(destinos, 100);
        }    
        //Si no, pide una direccion valida, solo en caso de que no sea null (haber seleccionado cancelar en el prompt).  
        else
        {
            if(dir2 != null)
                alert('Dirección inválida, introduce \"Derecha\" o \"Izquierda\"');
        }
    }
    while(dir2 != 'Derecha' && dir2 != 'Izquierda' && dir2 != null);
}

//Funcion que determina a que destino vamos a llegar. 
function destinos()
{
    let d1 = valCookie("direccion1");
    let d2 = valCookie("direccion2");
    if(d1  === "Izquierda" && d2 === "Izquierda")
        window.location = "./templates/Casa.html";
    else if(d1  === "Izquierda" && d2 === "Derecha")
        window.location = "./templates/Perdido_arbol.html";
    else if(d1  === "Derecha" && d2 === "Izquierda")
        window.location = "./templates/Hongo_furioso.html";
    else
        window.location = "./templates/Casa_bruja.html";
}

//Declaración de la variabel de la fecha.
let fecha = new Date();
fecha.setTime(fecha.getTime() + 1000*60*15); //Seteando la fecha actual más 15 minutos.

//Verifica si existen las cookies, en caso de que no, lleva a cabo las fucniones que permiten introducir las cookies.
if(valCookie("direccion1") === null && valCookie("direccion2") === null)
    setTimeout(direccion1, 1000); //Ejecuta "direcciones" 1 segundo después de entrar a la página.
    
//En caso de que si existan, las asigna a variables y lleva a cavo las verificaciones para saber a que direccion ir.
else
{
    let d1 = valCookie("direccion1");
    let d2 = valCookie("direccion2");
    if(d1  === "Izquierda" && d2 === "Izquierda")
        window.location = "./templates/Casa.html";
    else if(d1  === "Izquierda" && d2 === "Derecha")
        window.location = "./templates/Perdido_arbol.html";
    else if(d1  === "Derecha" && d2 === "Izquierda")
        window.location = "./templates/Hongo_furioso.html";
    else
        window.location = "./templates/Casa_bruja.html";
}



