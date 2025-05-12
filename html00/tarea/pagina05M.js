export let ejemplo = document.getElementById("demo")
console.log(ejemplo)

function imagen(id) {
    const componente="<figure>" +
        '<img src="https://picsum.photos/id/' +id+ '/200/200" alt="x">' +
        "<figcaption>Jane</figcaption>"
        "</figure>"

    return componente
}

const Picture = (id)=>{  
    return `<figure>
    <img src="https://picsum.photos/id/${id}/200/200" alt="">
    <figcaption>John</figcaption>
    </figure>`
    
};


//ejemplo.innerHTML ="Hola" + imagen(1) + imagen(2)
ejemplo.innerHTML ="Hola" + Picture(1)
