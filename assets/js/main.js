// Saludo inicial al usuario
alert("¡Hola! Bienvenido al robot cocinero 🤖 👨‍🍳");

// Confirmación del deseo del usuario de que el robot cocine por él
const deseoDelUsuario = confirm("¿Desea que cocine por usted? 🤔");

// Manejo de la respuesta del usuario
if (!deseoDelUsuario) {
    // Si el usuario no desea que cocine, se despide y recarga la página
    alert("Ha sido un placer hablar con usted. Saludos 👋");
    location.reload(); // Recargar la página si el usuario cancela (esto no sé porqué no esta funcionando, si lo pongo solo funciona)
} else {
    // Si el usuario desea que cocine, se informa que comienza el proceso de cocina
    alert("Comienza el proceso de cocina");
}

// Lista de víveres disponibles para cocinar
const listaDeComida = [
    "aceite", "arándanos", "atún", "azúcar", "banana", "cebolla", "dulce de leche", "espinaca", "galletitas 'Chocolinas'",
    "harina", "huevo", "leche", "lechuga", "manteca", "masa de tarta", "papa", "pechuga de pollo", "queso crema", "sal", "tomate"
];

// Confirmación del usuario para revisar la lista de víveres disponibles
const autorizacionDelUsuario = confirm("¿Me permite revisar la lista de víveres disponibles? 🤔");

// Manejo de la respuesta del usuario
if (!autorizacionDelUsuario) {
    // Si el usuario no autoriza, se despide y recarga la página
    alert("No puedo seguir con mi proceso de cocina sino reviso la lista de víveres disponibles. Ha sido un placer hablar con usted. Saludos 👋");
    location.reload(); // Recargar la página si el usuario cancela (esto no sé porqué no esta funcionando, si lo pongo solo funciona)
} else {
    // Si el usuario autoriza, se muestra la lista de ingredientes disponibles
    alert("Vamos a revisar la lista de ingredientes disponibles 📝");
    let mensajeViveres = construirMensajeViveres(listaDeComida); // Llama a la función para construir el mensaje de víveres
    alert(mensajeViveres); // Muestra el mensaje con los víveres disponibles
}

let respuesta;
let nuevasCompras = [];

do {
    // Pregunta al usuario sobre nuevas compras
    respuesta = prompt("¿Ha hecho alguna compra que desee notificar? Si no compró nada simplemente escriba 'no'. Si compró algo, escriba el nombre del producto y para finalizar las adiciones, escriba 'fin'.").trim().toLowerCase();

    if (respuesta !== "fin" && respuesta !== "no") {
        // Si la respuesta no es 'fin' ni 'no', verifica si el producto ya está en la lista de víveres disponibles
        let verificadorDeVivereExistente = listaDeComida.indexOf(respuesta);
        if (verificadorDeVivereExistente === -1) {
            // Si el producto no está en la lista, lo agrega a nuevasCompras
            nuevasCompras.push(respuesta);
        }
    } else if (respuesta === "fin") {
        // Si la respuesta es 'fin', indica que se ha finalizado la lista de compras
        alert("Ha finalizado la lista de compras.");
    }

} while (respuesta !== "fin" && respuesta !== "no");

if (nuevasCompras.length > 0) {
    // Si se han agregado nuevas compras, se muestra la lista de compras agregadas
    alert("Se han agregado las siguientes compras a la lista:");
    alert(nuevasCompras.join(", ")); // Muestra las nuevas compras separadas por coma

    // Actualiza la lista de víveres disponibles con las nuevas compras y las ordena alfabéticamente
    const listaDeComidaActualizada = listaDeComida.concat(nuevasCompras).sort();

    // Construye el mensaje actualizado de víveres disponibles
    let mensajeViveresActualizados = construirMensajeViveres(listaDeComidaActualizada);
    alert(mensajeViveresActualizados); // Muestra el mensaje actualizado con los víveres disponibles
} else {
    // Si no se han agregado nuevas compras, informa que no se han realizado adiciones
    alert("No se han agregado nuevas compras.");
}

alert("Ahora, ¡a cocinar! 🍳 ¿Qué quiere que le cocine? 🤔");

let eleccionDeComida;

// Ciclo para preguntar al usuario si prefiere algo dulce o salado
while (eleccionDeComida !== "dulce" && eleccionDeComida !== "salado") {
    eleccionDeComida = prompt("¿Prefiere algo dulce o salado?").trim().toLowerCase();
    if (eleccionDeComida === "dulce") {
        // Si elige dulce, muestra las opciones de comidas dulces disponibles
        alert("¡Perfecto! Voy a cocinar algo dulce 🍰");
        alert("Según mis cálculos y sus preferencias, dados los víveres disponibles, le puedo cocinar un Budín de Banana con Arándanos, una Chocotorta o unos Panqueques con Dulce de Leche");
        let eleccionDeComidaEspecifica;
        while (true) {
            // Pregunta específica para elegir la comida dulce deseada
            eleccionDeComidaEspecifica = prompt("Escriba 1 + 'enter' para seleccionar el Budín de Banana con Arándanos \nEscriba 2 + 'enter' para seleccionar la Chocotorta \nEscriba 3 + 'enter' para seleccionar los Panqueques con Dulce de Leche").trim();
            switch (parseInt(eleccionDeComidaEspecifica)) {
                case 1:
                    // Preparar Budín de Banana con Arándanos
                    alert("Cocinando... 🍳");
                    alert("¡Budín de Banana con Arándanos 🍌🍞 preparado! 🍽️ ¡Que lo disfrutes! 😄👨‍🍳");
                    break;
                case 2:
                    // Preparar Chocotorta
                    alert("Cocinando... 🍳");
                    alert("¡Chocotorta 🍫🍰 preparada! 🍽️ ¡Que la disfrutes! 😄👨‍🍳");
                    break;
                case 3:
                    // Preparar Panqueques con Dulce de Leche
                    alert("Cocinando... 🍳");
                    alert("Panqueques con Dulce de Leche 🥞 preparados! 🍽️ ¡Que los disfrutes! 😄👨‍🍳");
                    break;
                default:
                    // Mensaje por opción inválida en comida dulce
                    alert("Opción no válida ❌ Por favor, escribe una opción válida del 1 al 3 ✍");
                    continue; // Volver a pedir la opción
            }
            break; // Salir del bucle while interno cuando se seleccione una opción válida
        }
    } else if (eleccionDeComida === "salado") {
        // Si elige salado, muestra las opciones de comidas saladas disponibles
        alert("¡Perfecto! Voy a cocinar algo salado 🍕");
        alert("Según mis cálculos y sus preferencias, dados los víveres disponibles, le puedo preparar una Ensalada de Tomate, Atún, Lechuga y Cebolla, una Pechuga de Pollo con Puré de Papas o una Tarta de Espinaca");
        let eleccionDeComidaEspecifica;
        while (true) {
            // Pregunta específica para elegir la comida salada deseada
            eleccionDeComidaEspecifica = prompt("Escriba 1 + 'enter' para seleccionar la Ensalada de Tomate, Atún, Lechuga y Cebolla \nEscriba 2 + 'enter' para seleccionar la Pechuga de Pollo con Puré de Papas \nEscriba 3 + 'enter' para seleccionar la Tarta de Espinaca").trim();
            switch (parseInt(eleccionDeComidaEspecifica)) {
                case 1:
                    // Preparar Ensalada de Tomate, Atún, Lechuga y Cebolla
                    alert("Cocinando... 🍳");
                    alert("Ensalada de Tomate, Atún, Lechuga y Cebolla 🥗🍅🐟 preparada! 🍽️ ¡Que la disfrutes! 😄👨‍🍳");
                    break;
                case 2:
                    // Preparar Pechuga de Pollo con Puré de Papas
                    alert("Cocinando... 🍳");
                    alert("Pechuga de Pollo con Puré de Papas 🍗🥔 preparada! 🍽️ ¡Que la disfrutes! 😄👨‍🍳");
                    break;
                case 3:
                    // Preparar Tarta de Espinaca
                    alert("Cocinando... 🍳");
                    alert("Tarta de Espinaca 🥧🌿 preparada! 🍽️ ¡Que la disfrutes! 😄👨‍🍳");
                    break;
                default:
                    // Mensaje por opción inválida en comida salada
                    alert("Opción no válida ❌ Por favor, escribe una opción válida del 1 al 3 ✍");
                    continue; // Volver a pedir la opción
            }
            break; // Salir del bucle while interno cuando se seleccione una opción válida
        }
    } else {
        // Mensaje por entrada no válida (ni dulce ni salado)
        alert("Entrada no válida ❌ Por favor, escriba 'dulce' o 'salado' ✍");
    }
}

// ------------------------------------------------------------------------------------------------------

// Función para construir el mensaje de víveres disponibles
function construirMensajeViveres(lista) {
    let mensaje = "Víveres disponibles:\n";

    // Itera sobre la lista de víveres para construir el mensaje enumerado
    lista.forEach((vivere, index) => {
        mensaje += `${index + 1}. ${vivere}\n`; // Agrega cada ítem con su número de índice
    });
    
    return mensaje; // Retorna el mensaje completo con los víveres disponibles
}
