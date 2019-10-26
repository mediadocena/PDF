"use strict";
function Imprimir() {
    var pdf = new jsPDF('p', 'mm', 'letter');
    var nombre1 = document.getElementById("nombreText").value;
    var nombre2 = document.getElementById("mi id").value;
    pdf.text(20, 10, "Nombres:");
    pdf.text(20, 20, nombre1);
    pdf.text(20, 30, nombre2);
    pdf.save("miPDF.pdf");
}
;
