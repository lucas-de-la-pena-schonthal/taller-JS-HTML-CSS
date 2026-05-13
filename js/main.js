document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("btnSaludo");

    if (boton) {
        boton.addEventListener("click", () => {
            alert("¡Hola desde JavaScript!");
        });
    } else {
        console.error("No se encontró el botón con id 'btnSaludo'");
    }
});
