// elementos
const accessKey = 'aSdYBMVdkk2ftFZjcFyv1pFAExWLi8rP5fDg6a8Jlvo'; // acesskey do unsplash
const input = document.querySelector("#input")
const lupa = document.querySelector("#lupa")
const gallery = document.querySelector(".images")

// funções
async function fetchImages (){
    const query = input.value.trim(); //texto digitado do input
    if(query ==="") return // vazio não faz nada

    const URL = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=12`;

    try {
        const response = await fetch(URL); //requisição get para api
        const data = await response.json(); // converte a resposta para json

        gallery.innerHTML = "";

        data.results.forEach(image => {
            const imgElement = document.createElement("img"); // tag img
            imgElement.src = image.urls.small;
            imgElement.alt = image.alt_description;
            imgElement.classList = "img"
            gallery.appendChild(imgElement) // adiciona imagem a galeria

        })
    } catch (error) {
        console.log("Erro ao buscar imagens",error)
    }

}
//  eventos
lupa.addEventListener('click',()=>{
    fetchImages()
    input.value = ""
} )
input.addEventListener('keypress', (event) =>{
    if(event.key === "Enter"){
        fetchImages()
        input.value = ""
    } 
    
})