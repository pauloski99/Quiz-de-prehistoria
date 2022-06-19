function comprobarRespuestas(){

    var total = 5;
    var puntos = 0;

    var myForm = document.forms["quizForm"];
    var respuestas = ["a", "b", "c", "a", "b"];

    for(var i = 1; i <= total; i++){
        if(myForm["p" + i].value === null || myForm["p" + i]. value === ""){
            alert("Porfi, no dejes en blanco la pregunta " + i);
            return false;
        }else{
            if(myForm["p" + i].value === respuestas[i - 1]){
                puntos++;
            }
        }
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = '<h3>Has obtenido <span>'+ puntos +'</span> de <span>'+ total +' puntos</span></h3>';

    return false;
}