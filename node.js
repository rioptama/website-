// for example, adding  a print button

document.addEventListener('DOMContentLoaded', function () {
    const printButton = document.createElement('button');
    printButton.textContent = 'print CV';
    printButton.style.display = 'block';
    printButton.style.margin = '20px auto';
    document.body.appendChild(printButton);

    printButton.addEventListener('click', function () {
        window.print();
    });
});