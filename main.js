function insert(num){
    var number;
    number = document.getElementById("result").innerHTML;
    if(number.length < 16){
        document.getElementById("result").innerHTML = number + num;
    }
    else{
        alert("Não é possível inserir mais de 16 dígitos!");
    }
    if(number.length >= 8){
        document.getElementById("result").style.fontSize = "max(0.3em,2vw)";
    }
    else{
        document.getElementById("result").style.fontSize = "max(0.1em,4vw)";
    }

}
function clean(){
    document.getElementById("result").innerHTML = "";
}
function back(){
    var result = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = result.substring(0, result.length -1);
}
function calcule(){
    var result = document.getElementById("result").innerHTML;
    if(result){
        document.getElementById("result").innerHTML = eval(result);
    }
    else{
        document.getElementById("result").innerHTM = ""
    }
}