const emailInput = document.querySelector('#exampleFormControlInput1');
const passwordInput = document.querySelector('#inputPassword5');
const loginBtn = document.querySelector('.btn');


loginBtn.addEventListener('click', function validateForm(event) {
    event.preventDefault();
    let form = document.querySelector('.myform');
    if (form.checkValidity()) {
        location.href = './BSS-Shop1.html'
    }else {
        form.reportValidity();
    };
})





