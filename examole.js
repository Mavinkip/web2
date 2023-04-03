const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventdefault();
    validateInputs();
});
const setError = (element, message) =>{
    const inputcontrol = element.parentElement;
    const erroDisplay = inputcontrol.queryselector('.error');

    erroDisplay.innertext = message;
    inputcontrol.classlist.add('error');
    inputcontrol.classlist.remove('success');


}
const isvalidEmail = email => {
    
}

const validateInputs = () => {
    const usernamevalue = username.Value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.valuetrim();
    const password2value = password2.valuetrim();
    if(usernamevalue ===''){
        setError(username, 'username needed');
    }else{
        setsucess(username);
    }
    if(emailvalue === ''){

    }
}
