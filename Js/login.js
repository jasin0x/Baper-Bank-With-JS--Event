// add event listener with submit button
document.getElementById("btn-submit").addEventListener('click',function(){
    // console.log('sdfsdf');
    // get email address
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    

    // get password
    const passField = document.getElementById("user-password");
    const password = passField.value;

    // verify email and password
    if(email==="alu@gmail.com" && password ==='alu'){
        window.location.href = 'bank.html'
    }
    else{
       alert('invalid user');
    }
})

