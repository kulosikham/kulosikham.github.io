function downloadTxt() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = title ? `${title}.txt` : 'untitled.txt';
    link.click();
    URL.revokeObjectURL(link.href);
}
