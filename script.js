let password = document.querySelector('input[name="password"]');
let confirmpassword = document.querySelector('input[name="confirmpassword"]');
let invalidpassword = document.querySelector('.password-warning')
console.log(password)

confirmpassword.addEventListener ('input', validationCheck)


function validationCheck(e) {
    if (password.value != e.target.value){
        confirmpassword.classList.add('invalid')
        invalidpassword.classList.add('invalid')
    }   
    if (password.value == e.target.value){
        confirmpassword.classList.remove('invalid')
        invalidpassword.classList.remove('invalid')
    }
}