const container = document.querySelector("#container");
const numPixels = 4096;
const penColor = "rgb(60,60,60)";

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function pushPixels() {
    for (let i = 0; i < numPixels; i++) {
        const pixel = document.createElement("div");
        pixel.setAttribute("id", "pixel");
        pixel.addEventListener("click", () => (pixel.style.backgroundColor = penColor));
        pixel.addEventListener("mouseover", () => {
            if (!mouseDown) return;
            pixel.style.backgroundColor = penColor;
        });
        container.appendChild(pixel);
    }
}

pushPixels();

