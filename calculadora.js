var borrar = false;

function validarcaja2() {
    caja2 = document.f1.txtcaja2.value;
    var expreg = /[0-9]{1,5})+$/;
    if (expreg.test(caja2))
        alert("la expresion es correcta");
    else
        alert("la expresion es incorrecta");
}

function validarcaja1() {
    caja1 = document.f1.txtcaja1.value;
    var expreg = /^([0-9]{1,3}+\d{1})+$/;
    if (expreg.test(caja1))
        alert("la expresion es correcta");
    else
        alert("la expresion es incorrecta");
}

function deletecarac() {
    var caja2 = document.f1.txtcaja2.value;
    if (caja2 == "" || caja2 == "0" || caja2.length == 1 && blocdel != true) {
        document.f1.txtcaja2.value = "0";
    }
    else if (blocdel != true) {
        var res = caja2.substring(0, caja2.length - 1);
        document.f1.txtcaja2.value = res;
    }
}
function escribir(n) {
    var caja2 = document.f1.txtcaja2.value;
    if (borrar) {
        //alert("se borro");
        document.f1.txtcaja2.value = "";
        borrar = false;
        document.f1.txtcaja2.value = n;
    }
    else if (caja2 == "0" && n != ".") {
        cajao = caja2.replace("0", "")
        document.f1.txtcaja2.value = cajao + n;
    }
    else {
        document.f1.txtcaja2.value = caja2 + n;
    }
}

function arit(o) {
    var caja1 = document.f1.txtcaja1.value;
    var caja2 = document.f1.txtcaja2.value;
    var unum = caja1.substring(caja1.length - 1);
    calcular()
    if (unum == "+" || unum == "-" || unum == "*" || unum == "/") {
        unum = unum.replace(unum, o);
        var res = caja1.substring(0, caja1.length - 1);
        document.f1.txtcaja1.value = res + unum;
    }
    if (caja1 == "" && caja2 != "") {
        document.f1.txtcaja1.value = caja2 + o;
    }
    else {
        document.f1.txtcaja1.value = caja1 + caja2 + o;
    }
    borrar = true;
}
function calcular() {
    var caja1 = document.f1.txtcaja1.value;
    var caja2 = document.f1.txtcaja2.value;
    document.f1.txtcaja2.value = eval(caja1 + caja2);
    document.f1.txtcaja1.value = "";
    borrar = true;
    blocdel = true;
}