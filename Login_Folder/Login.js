// Back to Home Event
let back_to_Home = document.querySelector(".back");

back_to_Home.addEventListener("click", () => {
  window.location.href = "../Main_Page/index.html";
});

// -------------------------------------------------------

// Event on submit button
let submit = document.querySelector("#submit");
submit.addEventListener("click", function (e) {
  submitFunction(e);
});
let user_name = document.querySelector("#User_name");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let error_Message = document.querySelector("#errorMessage");
// Submit function()
function submitFunction(e) {
  error_Message.style.display = "none";
  if (user_name.value === " " || password.value === " " || email.value === "") {
    e.preventDefault();
    error_Message.style.display = "block";
    error_Message.textContent = "All fileds are required.";
    return;
  }
  if (!emailRegExp.test(email.value)) {
    e.preventDefault();
    error_Message.style.display = "block";
    error_Message.textContent = "Please enter a valid email address.";
    return;
  }
  if (
    emailRegExp.test(email.value) &&
    (password.value === "" || user_name.value === "")
  ) {
    e.preventDefault();
    error_Message.style.display = "block";
    error_Message.textContent = "All fileds are required.";
    return;
  } else {
    console.log("Login form is successfully submitted. ");
    submit.textContent = "Submitted";
    window.alert("Form is submitted successfully");
  }

  // Remove Event Function
  removeEvent();
}
function removeEvent() {
  setTimeout(() => {
    form.reset();
    console.log("Form reset. ");
    submit.removeEventListener("click", submitFunction);
    submit.textContent = "Submit";
  }, 3000);
}

// -------------------------------------------------------
