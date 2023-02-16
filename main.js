const submit = document.querySelector('.submit');
const clear = document.querySelector('.clear');
const inputs = document.querySelectorAll('.input');


submit.addEventListener("click", function () {
    inputs.forEach(input => {
       alert(input.value);
    });
});
clear.addEventListener("click", function () {
    inputs.forEach(input => {
        input.value = " ";
    });
});
    