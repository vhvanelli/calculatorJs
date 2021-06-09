var number;
function insert(num){
    number = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = number + num;
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
        document.getElementById("result").innerHTML = eval(result).toFixed("6");
    }
    else{
        document.getElementById("result").innerHTM = ""
    }
}