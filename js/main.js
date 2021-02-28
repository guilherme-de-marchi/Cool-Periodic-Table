function transforme_big_element(element) {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://cool-periodic-table.epizy.com/elements-basic-informations.json');
    request.responseType = 'json';
    request.send();
    request.onload = () => {
        let elements_basic_informations = request.response;

        let big_element = document.getElementById('p-table-big-element');
        big_element.classList.remove(big_element.classList.item(0));
        big_element.classList.add(element.classList.item(1));
        big_element.innerHTML = elements_basic_informations[element.innerHTML]['name'];
    };
}