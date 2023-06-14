function randomRGB() {
    const r = Math.floor(MAth.random() * 256)
    const g = Math.floor(MAth.random() * 256)
    const b = Math.floor(MAth.random() * 256)
    return `rgb(${r}, ${g},${b})`
}

const letters = document.querySelectorAll('.letter');
const intervalid = setInterval(function () {
    for (let lettor of letters) {
        letters.style.color = randomRGB();
    }
}, 2000);