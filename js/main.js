let request = new XMLHttpRequest();
request.open('GET', 'http://cool-periodic-table.epizy.com/elements-basic-informations.json');
request.responseType = 'json';
request.send();
let elements_basic_informations;
request.onload = () => { elements_basic_informations = request.response; };

function transforme_big_element(element) {

    let big_element = document.getElementById('p-table-big-element');
    big_element.classList.remove(big_element.classList.item(0));
    big_element.classList.add(element.classList.item(1));
    big_element.style.opacity = '100%';
    document.getElementById('p-table-big-element-atomic-number').innerText = Object.keys(elements_basic_informations).indexOf(element.innerHTML) + 1;
    document.getElementById('p-table-big-element-symbol').innerText = element.innerHTML;
    document.getElementById('p-table-big-element-name').innerText = elements_basic_informations[element.innerHTML]['name'];
    document.getElementById('p-table-big-element-atomic-weight').innerText = elements_basic_informations[element.innerHTML]['atomic-weight'];

    let element_family = document.getElementsByClassName('p-table-element-family');
    for (let i = 0; i < element_family.length; i++) {
        element_family[i].style.opacity = '0%';
    };

    element_family = document.getElementsByClassName(`~${element.classList.item(1)}`)[0];
    element_family.style.opacity = '100%';
};
