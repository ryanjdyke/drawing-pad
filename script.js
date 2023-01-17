const container = document.querySelector("#container");
const penColor = "rgb(60,60,60)";
const gridSizer = document.querySelector(".gridSizer");
const gridSizeDisplay = document.querySelector("p.gridSizer");

let pixelHeightAndWidth = 10;
let numPixels = 4096;

let mouseDown = false;
document.body.addEventListener("mousedown", () => (mouseDown = true));
document.body.addEventListener("mouseup", () => (mouseDown = false));

function pushPixels() {
    for (let i = 0; i < numPixels; i++) {
        const pixel = document.createElement("div");
        pixel.setAttribute("id", "pixel");  
        pixel.style.backgroundColor = container.style.backgroundColor;
        pixel.style.width = `${pixelHeightAndWidth}px`;
        pixel.style.height = `${pixelHeightAndWidth}px`;
        pixel.addEventListener("click", () => (pixel.style.backgroundColor = penColor));
        pixel.addEventListener("mouseover", () => {
            if (!mouseDown) return;
            pixel.style.backgroundColor = penColor;
        });
        container.appendChild(pixel);
    }
    console.log(pixel.style.width);
}

// Need to fix this while loop somehow
function clearPixels() {
    // const oldPixels = document.querySelectorAll("#pixel");
    // console.log(oldPixels.length);
    // for (let i = 0; i < oldPixels.length; i++) {
    while (container.hasChildNodes()) {
        container.removeChild(container.children[0]);
    }
}

gridSizer.addEventListener("mousemove", () => {
    gridSizeDisplay.textContent = `${gridSizer.value} X ${gridSizer.value}`;
});

gridSizer.addEventListener("change", () => {
    numPixels = (gridSizer.value * gridSizer.value);
    pixelHeightAndWidth = (640 / gridSizer.value);
    console.log(pixelHeightAndWidth)
    clearPixels();
    pushPixels();
});

gridSizeDisplay.textContent = `${gridSizer.value} X ${gridSizer.value}`;

pushPixels();

// TODO:
// Add Clear Button
// Add Color Picker
// Use Grid for pixels
// Add Eraser
// Add Shading