

const productos = [
    {id:1, name:'Big Landscape', img:'https://zippypixels.com/wp-content/uploads/2015/04/Free-poster-frame-psd-mockup-1-824x542.jpg', description:'Impresión de foto a elección, única para ti en formato paisaje tamaño grande.', stock: 15},
    {id:2, name:'Triple Square', img:'https://zippypixels.com/wp-content/uploads/2015/04/free-photo-frame-mockup-3-small-square-posters.jpg', description:'Impresión de foto a elección, o colección de fotos, en formato dividido en tres cuadrados iguales.', stock: 10},
    {id:3, name:'Wide View', img:'https://zippypixels.com/wp-content/uploads/2015/04/free-photo-frame-mockup-horizontal-view.jpg', description:'Impresión de foto a elección, única para ti en formato ancho tamaño grande.', stock: 12},
    {id:4, name:'Triple Vertical', img:'https://zippypixels.com/wp-content/uploads/2015/04/free-poster-frame-mockups-verticle.jpg', description:'Impresión de foto a elección, o colección de fotos, en formato dividido en tres marcos verticales delgados iguales.', stock: 8},
    {id:5, name:'Big Portrait', img:'https://zippypixels.com/wp-content/uploads/2015/04/free-poster-frame-verticle-3-4-mockup.jpg', description:'Impresión de foto a elección, única para ti en formato retrato (vertical) tamaño grande.', stock: 8},
    {id:6, name:'Big Square', img:'https://zippypixels.com/wp-content/uploads/2015/04/free-square-wall-photo-frame-mockup.jpg', description:'Impresión de foto a elección, única para ti en formato cuadrado tamaño grande.', stock: 6}
]


export const getData = new Promise ((resolve, reject) => {

    let condition = true
    setTimeout(()=>{
        if(condition){
            resolve(productos);
        }else{
            reject('Algo salió mal');
        }
    },2000)
    
})
