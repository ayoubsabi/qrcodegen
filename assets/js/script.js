const generateBtn = document.querySelector('.generate-btn');
const downloadBtn = document.querySelector('.download-btn');

generateBtn.addEventListener('click', () => {
    const inputValue = document.getElementById('text-input').value;

    if (inputValue.trim() === '') {
        alert('Please enter text or URL.');
        return;
    }

    // Clear the previous QR code
    const qrcodeContainer = document.getElementById('qrcode-container');
    qrcodeContainer.innerHTML = '';

    // Generate the new QR code with the selected style
    const qrcode = new QRCode(qrcodeContainer, {
        text: inputValue,
        width: 200,
        height: 200,
        correctLevel: QRCode.CorrectLevel.H,
    });
})

downloadBtn.addEventListener('click', () => {
    const qrcodeDiv = document.getElementById('qrcode-container');

    if (qrcodeDiv.innerHTML.trim() === '') {
        alert('Please generate a QR code first.');
        return;
    }

    // Convert the QR code to a data URL
    const dataUrl = qrcodeDiv.querySelector('img').src;

    // Create a downloadable link
    const downloadLink = document.createElement('a');
    downloadLink.href = dataUrl;
    downloadLink.download = 'qrcode.png'; // Change the file format if needed
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
})
