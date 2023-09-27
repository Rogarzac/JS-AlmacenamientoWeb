/*

API de almacenamiento web


Nos permite almacenar informacion en nuestro navegador, de dos formas:

    - local (persistencia de los datos)
    - sesion (los datos son volatiles)

    
Tanto el almacenamiento local como el de sesion, proporcionan un area privada para tratar sus datos, esto quiere decir que otros sitios web no pueden acceder a los datos que almacenamos.


*/

/*
Almacenamietno local (LocalStorage)

La informacion que pongamos en un almacenamiento local se guarda indefinidamente hasta que sea eliminada por codigo o borrada del navegador


Casos de uso: articulos de un carrito de compras, guardamos un perfil de configuracion, historial de uso.
*/


//guardar mi primer dato en el LocalStorage
///LocalStorage.setItem(key, value)
localStorage.setItem("Nombre", "Felipe");
localStorage.setItem("Apellido", "Maqueda");
localStorage.setItem("Edad", "31");

//Guardando un carrito de compras
let carritoComprasFelipe = ["Sabritones", "Coca-Cola", "Chicles"];
localStorage.setItem("CarritoCompras", carritoComprasFelipe);


///obtener la informacion almacenada en mi localstorage
//LocalStorage.getItem(key);
let apellido = localStorage.getItem("Apellido");
console.log(apellido);
//Recuperando el carrtio de compras 
let carrito = localStorage.getItem("CarritoCompras");
console.log(carrito);

//Borrar un elemento del LocalSotorage
//LocalStorage.removeItem(key)
localStorage.removeItem("CarritoCompras")


/// Conocer el largo o la longitud del localStorage
//Local.Storage.Length
let longitudLocalStorage = localStorage.length;
console.log(longitudLocalStorage);