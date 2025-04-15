function passwordCheck() {
    // 1. create a variable called password and collect the value of the input from user
    let password = document.getElementById('password').value

    // 2. create another variabe called confirmPassword and collect the value of the input from user
    let confirmPassword = document.getElementById('confirm-pass').value

    // 3. Check if the password matches with the confirmed password 
    if (password === '') {
        document.getElementById('valid').innerText = 'Please fill out the field!!'
    } else if (confirmPassword === password) {
        alert('✔ Password Created')
    } else {
        alert('❌ Mismatched Password')
    }
}