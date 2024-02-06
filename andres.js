        // LIJST VOORBEELD !!!!! vid 2

        //parte 1

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
        })

        //parte 2

    // fetch('https://jsonplaceholder.typicode.com/users')
    //      .then(res => {
    //     return res.json();
    // })
    //     .then(data => {                                             //podemos ver que DATA en el console.log es un array de objetos
    //     data.forEach(user => {                                      //.forEach ira por cada elemento de este array representando un user
    //         const markup = `<li>${user.name}</li>`;                 //user asigna un <li> a cada name     

    //         document.querySelector('ul').insertAdjacentHTML('beforeend', markup);       //document.querySelector selecciona el <ul>. InsertAdjacentHTML incerta la variable markup, 'beforeend' (antes del final de los espacios ,li>)
    //     });                                                                             //.forEach es un loop, asigna un <li> a cada usuario
    // })