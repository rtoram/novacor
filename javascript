const gradientBtn = document.getElementById('gradient-btn');
const gradientDisplay = document.getElementById('gradient-display');

function generateGradient() {
    const color2 = chroma(baseColor).set('hsl.h', '+120').hex(); // Cor triádica
    gradientDisplay.style.background = `linear-gradient(to right, ${baseColor}, ${color2})`;
    gradientDisplay.innerHTML = `<p class="text-sm">background: linear-gradient(to right, ${baseColor}, ${color2});</p>`;
}

gradientBtn.addEventListener('click', generateGradient);
