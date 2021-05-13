class Pokemon{
    
    constructor(nombre='Testy', naturaleza='Alegre', tipo='Tester', vida=100, ataque=100, defensa=100, velocidad=100, nivel=99)
    {
        this.nombre = nombre;
        this.naturaleza = naturaleza;
        this.tipo = tipo;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
        this.nivel = nivel;
    }

    subirNivel()
    {
        if(this.nivel < 100)
        {
            this.nivel++;   
            switch(this.naturaleza)
            {
                case 'Audaz':
                    this.ataque += 4;
                    break;

                case 'Osada':
                    this.defensa += 4;
                    break;

                case 'Cauta':
                    this.vida += 4;
                    break;

                case 'Alegre':
                    this.velocidad += 4;
                    break;
            }
            console.log("Su pokémon ha subido de nivel");
        }
        else
        {
            console.log("Su Pokémon se encuentra en el nivel máximo (lvl 100)");
        }
    }

    presentacion()
    {
        console.log("Hola me llamo "+this.nombre+" soy tipo "+this.tipo+" y estoy al nivel "+this.nivel+"");
    }

    sumaEstadis()
    {
        let suma = this.vida + this.ataque + this.defensa + this.velocidad;
        console.log("Los puntos de estadistica total de su Pokémon son: "+suma);
    }

    promEstadis()
    {
        let promedio = this.vida + this.ataque + this.defensa + this.velocidad;
        promedio /= 4;
        console.log("El promedio de las estadicticas de su Pokémon son: "+promedio);
    }
}

const POKEMON1 = new Pokemon('Charmander', 'Audaz', 'fuego', 10, 2, 5, 10, 1);
const POKEMON2 = new Pokemon('Ekans', 'Osada', 'veneno', 75, 22, 30, 20, 18);
const POKEMON3 = new Pokemon('Diglett', 'Cauta', 'tierra', 20, 13, 15, 25, 10 );
const POKEMON4 = new Pokemon('Electrode', 'Osada', 'eléctrico', 100, 70, 55, 92, 28);
const POKEMON5 = new Pokemon('Raichu', 'Alegre', 'eléctrico', 500, 322, 278, 191, 98);