const inputPassword = document.getElementById("password");
const submitButton = document.getElementById("submit");
const blockerText = document.getElementById("blockerText");
const blocker = document.getElementById("blocker");

function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = '';
}

function disableAllSticker() {
    const sticker = document.querySelectorAll('.sticker');
    sticker.forEach(img => {
        img.style.pointerEvents = 'none';
        img.style.display = 'none'; 
    });
}

function enableAllSticker() {
    const sticker = document.querySelectorAll('.sticker');
    sticker.forEach(img => {
        img.style.pointerEvents = 'auto';
        img.style.display = 'block'; 
    });
}

const mobileQuery = window.matchMedia("(max-width: 480px)");
if (mobileQuery.matches) {
  disableAllSticker();
}

disableAllSticker()
disableScroll()

submitButton.addEventListener("click", () => {
    const passwordValue = inputPassword.value;
    const correctPassword = "100523";
    const secretPassword = "LEGACY";
    
    if (passwordValue === correctPassword) {
        blockerText.textContent = "Loading...";
        blocker.classList.add('moveToRight');
        setTimeout(enableScroll, 3000);
        setTimeout(enableAllSticker, 3000);
    } else if (passwordValue.toUpperCase() === secretPassword) {
        window.location.href = "legacy/index.html"
    } else if (passwordValue === '') {
        blockerText.textContent = "Please enter a valid password";
    } else {
        blockerText.textContent = "Incorrect";
        inputPassword.value = '';
    }
})