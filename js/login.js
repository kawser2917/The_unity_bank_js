document.getElementById('btn-submit').addEventListener("click",function(){
    // getting email value
    const emailField = document.getElementById("user-email")
    const email = emailField.value
    // console.log(email)

    const passwordField = document.getElementById("user-password")
    const password = passwordField.value;
    // console.log(password)

    if( email === "kawser@gmail.com" && password === '123456'){
        window.location.href = "bank.html"
    }
    else{
        alert("Invalid user")
    }

})