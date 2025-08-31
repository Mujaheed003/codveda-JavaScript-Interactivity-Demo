// Dropdown functionality
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownBtn.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

// Modal functionality
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Form validation
const form = document.getElementById("contactForm");
const successPopup = document.getElementById("successPopup");
const errorPopup = document.getElementById("errorPopup");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    errorPopup.innerHTML = "Please fill out all fields!";
    errorPopup.classList.remove("hide");
    errorPopup.classList.add("show");
    errorPopup.style.display = "block";
    setTimeout(() => {
      errorPopup.classList.remove("show");
      errorPopup.classList.add("hide");
      setTimeout(() => {
        errorPopup.style.display = "none";
      }, 700);
    }, 3000);
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errorPopup.innerHTML = "Please enter a valid email!";
    errorPopup.classList.remove("hide");
    errorPopup.classList.add("show");
    errorPopup.style.display = "block";
    setTimeout(() => {
      errorPopup.classList.remove("show");
      errorPopup.classList.add("hide");
      setTimeout(() => {
        errorPopup.style.display = "none";
      }, 700);
    }, 3000);
  } else {
    formMessage.textContent = "";
    form.reset();
    // Show success popup with animation
    successPopup.classList.remove("hide");
    successPopup.classList.add("show");
    successPopup.style.display = "block";
    setTimeout(() => {
      successPopup.classList.remove("show");
      successPopup.classList.add("hide");
      setTimeout(() => {
        successPopup.style.display = "none";
      }, 700);
    }, 30000);
  }
});
