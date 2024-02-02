// ----------------EXPLICACIÓN SIMPLE EN CONSOLA------------------------


//Definiendo el intervalo de tiempo

/* let segundos = 10;

//Definiendo el tipo de ejercicio

let aplauso = function(){
    segundos --
    console.log(`Doy un aplauso`)
    console.log (segundos)

//clearInterval(expresiones)

if (segundos ===0)
{clearInterval(expresiones)}
}

//Defino la acción 

let expresiones = setInterval(aplauso, 1000); */

//Establecer límites en las expresiones




//------------------Slider--------------------

// Elemento de escucha ---

window.addEventListener('load', function(){
        console.log("documento cargado");


// Inicio desarrollo slider


        const slider = document.getElementById("slider");

        
    const imagenes= ["baronrojo_1.jpg", "baronrojo_2.jpg", "baronrojo_3.jpg", "baronrojo_4.jpg", "diablitas.jpg"];

    // variable para recorrer las imagenes

        let indexImagenes = 0;

    // cambiar imagenes

        const CambiarImagenes= function(){
            //slider.src="img/baronrojo_1.jpg";
        
            slider.src=`img/${imagenes[indexImagenes]}`;

            if(indexImagenes < 4){
                indexImagenes++;
    
            }
            else {indexImagenes =0};
        };

    CambiarImagenes();

setInterval(CambiarImagenes, 3000);

});




