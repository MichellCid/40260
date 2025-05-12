export const Picture = (id,name) => {

    const url = `https://picsum.photos/id/${id}/200/200`
    return `
        <figure>
            <img src="${url}" alt="" class="redonda">
            <figcaption>${name}</figcaption>
        </figure>`
}

export function saludar(){
alert("x")
}

export const toggleClassOnClick = () => {
    const lista = document.querySelectorAll("img");
    console.log(lista);

    for (let i = 0; i < lista.length; i++) {
        lista[i].addEventListener("click", () => {
            lista[i].classList.toggle("redonda");
        });
    }
};

