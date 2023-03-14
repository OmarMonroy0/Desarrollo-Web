function validarNumero(){
    let valor = document.getElementById('numero').value;
    let texto ;
    if (isNaN(valor) || valor < 1 || valor > 10)
        texto = "No es pequeño";
    else 
        texto = "Muy bien";
    
    document.getElementById('mensaje').innerHTML= texto;
    
}

function accionesColorFavoritoUsuario(){
    let valor,texto;
    valor = document.getElementById('color').value;
    
    document.body.style.background = valor;

    if (valor === "red")
            window.alert('!Lo sabía');
    
}