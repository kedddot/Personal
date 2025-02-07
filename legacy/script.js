const password = document.getElementById('password');
const submit = document.getElementById('submit');
const blocker = document.getElementById('blocker');


function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// disableScroll()


submit.addEventListener('click', () => {
    const Correctpassword = "100523";
    const passwordValue = password.value;

    if (passwordValue === Correctpassword) {
        blocker.classList.add('moveToRight');
        document.body.style.overflow = '';
    } else {
        alert('Incorrect password. Please try again.');
        password.value = '';
    }
})
