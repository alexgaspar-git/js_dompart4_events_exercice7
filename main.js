let maDiv = document.querySelector('#content');
console.log(maDiv);

maDiv.addEventListener('click', (e) => {
    let cible = e.target
    if (cible.tagName == "DIV") {
        cible.style = "border: 2px black solid"
    } else if (cible.tagName == "P") {
        cible.style = "font-weight: bold; color: red"
    } else if (cible.tagName == "H1") {
        cible.style = "text-decoration: underline;"
    } else if (cible.tagName == "H2") {
        cible.innerText = cible.
    }
});