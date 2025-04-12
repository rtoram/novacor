const imageUpload = document.getElementById('image-upload');
const paletteDisplay = document.getElementById('palette-display');
const colorThief = new ColorThief();

imageUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const img = new Image();
    img.onload = () => {
        const palette = colorThief.getPalette(img, 5); // 5 cores
        paletteDisplay.innerHTML = '';
        palette.forEach(rgb => {
            const hex = chroma(rgb).hex();
            const div = document.createElement('div');
            div.className = 'w-12 h-12';
            div.style.backgroundColor = hex;
            div.innerHTML = `<p class="text-xs text-center">${hex}</p>`;
            paletteDisplay.appendChild(div);
        });
    };
    img.src = URL.createObjectURL(file);
});
