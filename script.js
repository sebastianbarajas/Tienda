function abrirModalArtUno(){
    var modal = document.getElementById('popArtUno');
    modal.classList.remove('display-none');
}

function cerrarModal(){
    var modal = document.getElementById('popArtUno');
    modal.classList.add('display-none');
}

function abrirModalArtDos(){
    var modal = document.getElementById('popArtDos');
    modal.classList.remove('display-none');
}

function cerrarModalDos(){
    var modal = document.getElementById('popArtDos');
    modal.classList.add('display-none');
}

function abrirModalArtTres(){
    var modal = document.getElementById('popArtTres');
    modal.classList.remove('display-none');
}

function cerrarModalTres(){
    var modal = document.getElementById('popArtTres');
    modal.classList.add('display-none');
}




const containerProductos = document.getElementById('container-productos');

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('container')
    div.classList.add('container-desk-4')
    div.classList.add('justify-content-center')
    div.innerHTML= `
    <div class="container-producto">
                    <div class="container justify-content-center">
                        <a href="#" onclick="abrirModalArtUno()"><img src=${producto.img} alt="" class="img-fluid"></a>
                    </div>
                    <div class="container d-block">
                        <p class="fs-3 pb-1">$ ${producto.precio}</p>
                        <p class="fs-4 pb-1">${producto.nombre}</p>
                        <p class="fs-4 pb-1">${producto.marca}</p>
                    </div>
                    <div class="container">
                        <div class="container-6 justify-content-end">
                            <input type="number" placeholder="0" class="input-cant-product">
                        </div>
                        <div class="container-6 justify-content-start">
                            <button class="btn-agregar" id="agregar${producto.id}">Agregar</button>
                        </div>
                    </div>
                </div>
    `

    containerProductos.appendChild(div)
})




