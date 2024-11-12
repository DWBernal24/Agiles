document.addEventListener("DOMContentLoaded", function () {
    // Datos de ejemplo del progreso del proyecto
    const progresoProyecto = {
        fases: [
            { nombre: "Fase 1", descripcion: "Investigación completada.", completado: 100 },
            { nombre: "Fase 2", descripcion: "Desarrollo en curso", completado: 80 },
            { nombre: "Fase 3", descripcion: "Pruebas iniciales realizadas.", completado: 50 },
            { nombre: "Fase 4", descripcion: "Documentación en proceso.", completado: 20 }
        ]
    };

    // Actualizar barra de progreso general
    function actualizarProgresoGeneral() {
        const totalFases = progresoProyecto.fases.length;
        const progresoTotal = progresoProyecto.fases.reduce((acc, fase) => acc + fase.completado, 0) / totalFases;
        const progressBar = document.querySelector(".progress-bar");
        const progressText = document.querySelector("#progress-text");

        progressBar.style.width = `${progresoTotal}%`;
        progressText.textContent = `Progreso: ${progresoTotal.toFixed(0)}% completado`;
    }

    // Generar detalles de actividades
    function generarDetallesActividades() {
        const detallesLista = document.querySelector("#detalles .card ul");
        detallesLista.innerHTML = ""; // Limpiar contenido previo

        progresoProyecto.fases.forEach((fase) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${fase.nombre}:</strong> ${fase.descripcion} - ${fase.completado}% completado.`;
            detallesLista.appendChild(listItem);
        });
    }

    // Simulación de generación de reportes
    function generarPDF() {
        alert("Generando reporte en formato PDF...");
        // Aquí podrías integrar jsPDF para crear el PDF, por ejemplo:
        // const doc = new jsPDF();
        // doc.text("Reporte de Avance", 10, 10);
        // doc.save("reporte_avance.pdf");
    }

    function generarExcel() {
        alert("Generando reporte en formato Excel...");
        // Aquí podrías integrar SheetJS para crear el archivo Excel, por ejemplo:
        // const wb = XLSX.utils.book_new();
        // XLSX.utils.book_append_sheet(wb, sheet, "Reporte");
        // XLSX.writeFile(wb, "reporte_avance.xlsx");
    }

    // Inicializar reporte de avance
    function inicializarReporte() {
        actualizarProgresoGeneral();
        generarDetallesActividades();
    }

    // Agregar eventos a los botones de generación de reportes
    document.getElementById("generate-pdf").addEventListener("click", generarPDF);
    document.getElementById("generate-excel").addEventListener("click", generarExcel);

    inicializarReporte();
});
