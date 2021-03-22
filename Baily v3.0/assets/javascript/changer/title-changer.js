$( document ).ready(function() {
    titleChanger(500)
});

const titleChanger = (delay) => {
    titles = ["S", "Se", "Seb", "Seba", "Sebas", "Sebast", "Sebasti", "Sebastia", "Sebastian", "Sebastian", "Sebastia", "Sebasti", "Sebast", "Sebas", "Seba", "Seb", "Se", "S"];
    delay = delay || 2000;

    let counter = 0;

    setInterval(() => {
        if (counter < titles.length) document.title = titles[counter++];
        else document.title = titles[(counter = 0)];
    }, delay);
};