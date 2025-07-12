let usuarios: string[] = [];
const admin: string[] = ["laura12"];
let productosC: string[] = ["Hamburguesa", "Pizza", "Hotdog"];
let productosB: string[] = ["CocaCola", "Pepsi", "Sprite"];
let ventas: string[] = [];
let repetir: string = "si";

function agregarProducto(lista: string[], mensaje: string): void {
    const nuevo = prompt(lista.join("\n") + "\n" + mensaje);
    if (nuevo) {
        lista.push(nuevo.trim());
        alert("Producto agregado con éxito:\n" + lista.join("\n"));
    } else {
        alert("No se agregó ningún producto.");
    }
}

function eliminar(lista: string[], producto: string): boolean {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].toLowerCase().trim() === producto) {
            lista.splice(i, 1);
            return true;
        }
    }
    return false;
}

while (repetir === "si") {
    const tipUser: number = Number(
        prompt("¿Qué tipo de usuario eres? 👤\n1. Administrador\n2. Cliente")
    );

    switch (tipUser) {
        case 1:
            const nameAdA: string | null = prompt("Digite contraseña de administrador");
            if (nameAdA) {
                const nameAd = nameAdA.toLowerCase();
                if (admin.includes(nameAd)) {
                    alert("Acceso permitido");
                    const val: number = Number(
                        prompt("¿Qué desea hacer?\n 1. Agregar nuevos productos\n 2. Eliminar productos existentes")
                    );

                    switch (val) {
                        case 1:
                            const op = Number(
                                prompt("¿En qué sección desea agregar el producto?\n1. Comidas\n2. Bebidas")
                            );
                            switch (op) {
                                case 1:
                                    agregarProducto(productosC, "Escriba la comida que desea agregar:");
                                    break;
                                case 2:
                                    agregarProducto(productosB, "Escriba la bebida que desea agregar:");
                                    break;
                                default:
                                    alert("Opción inválida");
                                    break;
                            }
                            break;

                        case 2:
                            const eli = prompt(
                                "¿Qué producto desea eliminar?\n" +
                                productosC.join("\n") + "\n" + productosB.join("\n" + "\n"));

                            if (eli) {
                                const productoEli = eli.toLowerCase().trim();
                                const elim = eliminar(productosC, productoEli) || eliminar(productosB, productoEli);
                                if (elim) {
                                    alert(
                                        "Producto eliminado con éxito\n" + productosC.join("\n") + "\n" + productosB.join("\n"));
                                } else {
                                    alert("Producto no encontrado");
                                }
                            } else {
                                alert("No ingresaste producto");
                            }
                            break;

                        default:
                            alert("Opción inválida");
                            break;
                    }
                } else {
                    alert("No eres administrador, no tienes acceso");
                }
            } else {
                alert("No ingresaste nada");
            }
            break;

        case 2:
            alert("Bienvenido(a) a nuestro servicio de comida rápida 🍔🍴 ");
            const usuario = prompt("Ingresa tu nombre");
            if (usuario) {
                usuarios.push(usuario.trim());
                alert("Hola, " + usuario + ", bienvenido(a) 😊");

                let pedido: string | null;

                do {
                    const opcion = Number(
                        prompt("¿Qué quieres pedir? (Digite el número de la opción)\n1. Comida 🍔\n2. Bebidas 🥤")
                    );

                    switch (opcion) {
                        case 1:
                            const comida = prompt(
                                "¿Qué desea comer? (Escriba la comida separada por comas)\n" + productosC.join("\n"))?.toLowerCase().trim();

                            if (comida) {
                                const convertir = comida.split(",");
                                for (let j = 0; j < convertir.length; j++) {
                                    let cc = convertir[j].toLowerCase().trim();
                                    for (let i = 0; i < productosC.length; i++) {
                                        let c = productosC[i].toLowerCase().trim();
                                        if (c === cc) {
                                            ventas.push(productosC[i]);
                                        }
                                    }
                                }
                            } else {
                                alert("No se seleccionó comida.");
                            }
                            break;

                        case 2:
                            const bebidas = prompt("¿Qué desea tomar? (Escriba las bebidas separadas por comas)\n" + productosB.join("\n"))?.toLowerCase().trim();

                            if (bebidas) {
                                const converti = bebidas.split(",");
                                for (let k = 0; k < converti.length; k++) {
                                    let bb = converti[k].toLowerCase().trim();
                                    for (let i = 0; i < productosB.length; i++) {
                                        let b = productosB[i].toLowerCase().trim();
                                        if (b === bb) {
                                            ventas.push(productosB[i]);
                                        }
                                    }
                                }
                            } else {
                                alert("No se seleccionó bebida.");
                            }
                            break;

                        default:
                            alert("Opción ingresada no válida");
                            break;
                    }

                    pedido = prompt("¿Deseas pedir algo más? (sí/no)");

                } while (pedido === "si");

                alert("Tu pedido: " + ventas.join(", "));
                alert("Su pedido va en camino 🛵");
            }
            break;

        default:
            alert("Opción inválida");
            break;
    }

    repetir = prompt("¿Desea volver al inicio? (si/no)") || "no";
}










