// run this anytime you select or unselect pass or confirm,
// if confirm is not equal to ""

function confirm_pass() {

  const password2 = document.getElementById("passconfirm");
  const password2_v = password2.value
  if(password2_v != ""){
    const password = document.querySelector('#password');
    const password_v = password.value
    if(password2_v != password_v){
      password.classList.add('no_match');
      password2.classList.add('no_match');
    }
    else{
      password.classList.remove('no_match');
      password2.classList.remove('no_match');
    }
  }
}

const pass_input = document.querySelector('#password');
const pass2_input = document.querySelector('#passconfirm');
pass_input.addEventListener('input', confirm_pass);
pass2_input.addEventListener('input', confirm_pass);
