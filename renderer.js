document.addEventListener('DOMContentLoaded', async () => {
    let names = window.api.getNames();

    let divNames = document.getElementById("names");
    let nameString = names.map((elem) => {
        return elem.name;
    }).join("<br/>");

    window.api.addName("Mark Zukerberg");

    divNames.innerHTML = nameString;

})