
const tiempo = setTimeout(()=> {
    window.location.href="https://www.google.com/"
}, 5000);

document.querySelector("#detener").addEventListener("click", ()=>{
    clearTimeout(tiempo)
})

/*  
setTimeout(() => {
    document.write("este es el primer mensaje", "<br/>");
  }, 5000);

  setTimeout(() => {
    document.write("este es el segundo mensaje" + "<br/>");
  }, 3000);
  
  setTimeout(() => {
    document.write("este es el tercer mensaje" + "<br/>");
  }, 1000); */

  //Tenga en cuenta que la primera función no crea una "pausa" de 5 segundos antes de llamar a la segunda función. En su lugar, se llama a la primera función, pero espera 5 segundos para ejecutarse. Mientras la primera función está esperando para ejecutarse, se llama a la segunda función y se aplica una espera de 3 segundos a la segunda función antes de que se ejecute. Dado que ni los temporizadores de la primera ni la segunda función se han completado, se llama a la tercera función y completa su ejecución primero. Luego sigue el segundo. Luego, finalmente, la primera función se ejecuta después de que finalmente se completa su temporizador.//