// Initialize Canvas 
const initCanvas = (id) => {
    return new fabric.Canvas(id, {
        width: 650,
        height: 500,
        backgroundColor: '#1B1B22'
    });
}

const canvas = initCanvas('canvas');
const reader = new FileReader();
const inputFile = document.getElementById('myImg');

// Upload Image Listener 
inputFile.addEventListener('change', imgAdded);

// Render image in canvas
reader.addEventListener("load", () => {
    fabric.Image.fromURL(reader.result, img => {
        canvas.add(img)
        canvas.requestRenderAll()
    })
})


//  Render the canvas 
canvas.renderAll();

// Add image function for canvas
const imgAdded = (e) => {
    clearCanvas(canvas)
    const inputElem = document.getElementById('myImg')
    const file = inputElem.files[0];
    reader.readAsDataURL(file)

    // Zoom in & Zoom out function by chnaging mouse wheel
    canvas.on('mouse:wheel', function (opt) {
        var delta = opt.e.deltaY;
        var zoom = canvas.getZoom();
        zoom *= 0.999 ** delta;
        if (zoom > 20) zoom = 20;
        if (zoom < 0.01) zoom = 0.01;
        canvas.setZoom(zoom);
        opt.e.preventDefault();
        opt.e.stopPropagation();
        canvas.renderAll();
    });
}


// Clear the canvas
const clearCanvas = (canvas) => {
    canvas.getObjects().forEach((o) => {
        if (o !== canvas.backgroundImage) {
            canvas.remove(o)
        }
    })
}

