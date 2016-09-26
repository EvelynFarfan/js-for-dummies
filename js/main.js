window.addEventListener("load", function() {
    var boton = document.getElementById("crear");
    var termino = document.getElementById("termino");
    var concepto = document.getElementById("concepto");
    var cardsTexto = document.querySelectorAll(".cardsTexto");
    var dragTarget = document.getElementById("dragtarget");
    var dropTarget1 = document.getElementById("div1");
    var dropTarget2 = document.getElementById("div2");

    boton.addEventListener("click", function (){
        var cardTermino = document.createElement("div");
        var cardConcepto = document.createElement("div");
        publicar(termino.value, concepto.value, cardTermino, cardConcepto);
        termino.value = "";
        concepto.value = "";
    });

    function publicar (termino, concepto, cardTermino, cardConcepto) {
        cardTermino.classList.add("formatoCard");
        cardConcepto.classList.add("formatoCard")
        cardTermino.innerHTML = termino;
        cardConcepto.innerHTML = concepto;
        var card1 = document.getElementById("card1");
        var card2 = document.getElementById("card2");
        card1.insertBefore(cardTermino, card1.childNodes[0]);
        card2.insertBefore(cardConcepto, card2.childNodes[1]);
    }

    termino.addEventListener("keydown", function () {
        boton.disabled = false;
        cardVacia (termino);
    });

    function cardVacia (termino) {
        var cantidadCaracteres = cardsTexto.value.length;

        if (termino.value == null || termino.length == 0 || termino.value === "" || /^\s+$/.test(termino.value)) {
            boton.disabled = true;
        }
    }

    concepto.addEventListener("keydown", function () {
        boton.disabled = false;
        var cardsTexto = ["termino","concepto"];
    });

    function cardVacia (concepto) {
        var cantidadCaracteres = concepto.value.length;

        if (concepto.value == null || concepto.length == 0 || concepto.value === "" || /^\s+$/.test(concepto.value)) {
            boton.disabled = true;
        }
    }

    termino.addEventListener("keyup", function (e) {
        var tecla = e.keyCode;
        heightTextArea(tecla);
    });

    function heightTextArea (tecla) {
        if (tecla == 13) {
            termino.rows++;
            concepto.rows++;
        } else if (tecla == 8) {
            termino.rows--;
            concepto.rows--;
        }
        if (termino.rows < 4) {
            termino.rows = 4; 
            concepto.rows =4;   
        }
    }

    concepto.addEventListener("keyup", function (e) {
        var tecla = e.keyCode;
        heightTextArea(tecla);
    });

    function heightTextArea (tecla) {
        if (tecla == 13) {
            termino.rows++;
            concepto.rows++;
        } else if (tecla == 8) {
            termino.rows--;
            concepto.rows--;
        }
        if (termino.rows < 4) {
            termino.rows = 4; 
            concepto.rows =4;   
        }
    }

    dragTarget.addEventListener("dragstart", function (e) {
        dragStart(e);
    });

    function dragStart(e) {
        e.dataTransfer.setData("Text", event.target.id);
    }

    dropTarget1.addEventListener("drop",function (e) {
        drop(e);
    });

    dropTarget2.addEventListener("drop",function (e) {
        drop(e);
    });

    dropTarget1.addEventListener("dragover",function (e) {
        allowDrop(e);
    });

    dropTarget2.addEventListener("dragover",function (e) {
        allowDrop(e);
    });

    function drop(e) {
        e.preventDefault();
        var data = event.dataTransfer.getData("Text");
        e.target.appendChild(document.getElementById(data));
    }

    function allowDrop(e) {
        e.preventDefault();
    }
});