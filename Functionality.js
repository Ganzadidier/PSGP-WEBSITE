
function openModal() {
    document.getElementById("signupModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("signupModal").style.display = "none";
}

function submitForm() {
    alert("Sign-up successful!");
    closeModal();
}