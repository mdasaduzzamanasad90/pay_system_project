document.getElementById('login-button').addEventListener('click',function(event){
    event.preventDefault();

    const mobilenumber = document.getElementById('mobile-numebr').value
    const pinnumber = document.getElementById('pin-number').value

    // condition for login
    if (mobilenumber === '019' && pinnumber === '1234') {
        window.location.href = 'home.html';
    }

    else{
        alert('sorry - please try again');
    }
})