function Imprimir() {
    var pdf = new jsPDF('p', 'mm', 'letter');
    var nombre1 = document.getElementById("nombreText").value;
    var nombre2 = document.getElementById("mi id").value;
    pdf.text(20,10,"Nombres:");
    pdf.autoTable({
      head: [['Name', 'Email', 'Country']],
      body: [
          ['David', 'david@example.com', 'Sweden'],
          ['Castille', 'castille@example.com', 'Norway'],
          // ...
      ]
  });
    pdf.save("miPDF.pdf");
  };
  