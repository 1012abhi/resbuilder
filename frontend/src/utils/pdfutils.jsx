import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

// A4 dimensions (mm)
export const A4_WIDTH_MM = 210;
export const A4_HEIGHT_MM = 297;

// A4 dimensions in pixels at 300 DPI for high quality
export const A4_WIDTH_PX = 2480;
export const A4_HEIGHT_PX = 3508;

export const generatePDF = async (element) => {
  // Remove shadow temporarily
  const originalStyle = element.style.boxShadow;
  element.style.boxShadow = 'none';

  try {
    // Create canvas with high DPI
    const canvas = await html2canvas(element, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      logging: false,
      width: element.scrollWidth,
      height: element.scrollHeight,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
      backgroundColor: '#ffffff',
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = A4_WIDTH_MM;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    if (imgHeight > A4_HEIGHT_MM) {
      const totalPages = Math.ceil(imgHeight / A4_HEIGHT_MM);
      for (let i = 0; i < totalPages; i++) {
        const yOffset = i * A4_HEIGHT_MM;
        pdf.addImage(imgData, 'PNG', 0, -yOffset, imgWidth, imgHeight);
        if (i < totalPages - 1) {
          pdf.addPage();
        }
      }
    } else {
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    }

    pdf.save('resume-template.pdf');
  } finally {
    // Restore original style
    element.style.boxShadow = originalStyle;
  }
};