console.log('script loded');

const initCanvas = (id) => {
    return new fabric.Canvas(id, {
        width: 650,
        height: 500,
        backgroundColor: '#1B1B22'
    });
}

const canvas = initCanvas('canvas');

// const canvas = new fabric.Canvas('canvas', {
//     width: 500,
//     height: 500,
//     backgroundColor: 'red',
// });

canvas.renderAll();