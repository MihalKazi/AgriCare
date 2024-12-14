// Get the modal and buttons
var modal = document.getElementById("login-modal");
var loginBtn = document.getElementById("login-btn");
var closeModal = document.getElementById("close-modal");

// Open the modal when login button is clicked
loginBtn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal when close button is clicked
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Open the modal
loginBtn.onclick = function () {
    modal.classList.add("show");
}

// Close the modal
closeModal.onclick = function () {
    modal.classList.remove("show");
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
}
