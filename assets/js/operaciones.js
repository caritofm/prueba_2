
export const enviarDatos =  (name, gruops, price, img) =>{
    const rutaArchivoHtml = '../personaje.html';

    fetch(rutaArchivoHtml)
       .then(response => response.text() )
       .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const imagePage = doc.getElementById('imagePage');
        imagePage.src = img 

        const titlePage  = doc.getElementById('titlePage');
        titlePage.textContent = name


        const grupoPage  = doc.getElementById('grupoPage');
        grupoPage.textContent = gruops;

        const pricePage = doc.getElementById('pricePage');
        pricePage.textContent = price;

        const nuevoHTML = new XMLSerializer().serializeToString(doc)

        document.body.innerHTML = nuevoHTML;

       })

       .catch((error) => {
           console.error(`Error al cargar los datos: ${error}`)
       })

       

}