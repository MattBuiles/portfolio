const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Ruta al archivo HTML
    const htmlPath = path.join(__dirname, 'public', 'certificates', 'CV_Completo.html');
    const outputPath = path.join(__dirname, 'public', 'certificates', 'CV_Completo.pdf');
    
    // Verificar que el archivo HTML existe
    if (!fs.existsSync(htmlPath)) {
        console.error('El archivo HTML no existe:', htmlPath);
        await browser.close();
        return;
    }
    
    // Cargar el archivo HTML
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
    
    // Generar PDF
    await page.pdf({
        path: outputPath,
        format: 'A4',
        printBackground: true,
        margin: {
            top: '0.5in',
            right: '0.5in',
            bottom: '0.5in',
            left: '0.5in'
        }
    });
    
    console.log('PDF generado exitosamente:', outputPath);
    await browser.close();
}

generatePDF().catch(console.error);
