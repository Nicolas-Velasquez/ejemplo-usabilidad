function alerta() {
    // Muestra un cuadro de confirmación al usuario
    if (confirm("¿Estás seguro que deseas salir?")) {
        // Si el usuario confirma, redirige a "resultado.html"
        window.location.href = "resultado.html";
    } else {
        // Si el usuario cancela, recarga la página actual
        window.location.reload();
    }
}
