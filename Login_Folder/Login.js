// Back to Home Event
let back_to_Home = document.querySelector(".back");

back_to_Home.addEventListener("click", () => {
  window.location.href = "../Main_Page/index.html";
});

// -------------------------------------------------------

// Event on submit button
let submit = document.querySelector("#submit");
submit.addEventListener("click", function () {
  submitFunction();
});

// Submit function()
function submitFunction() {
  let user_name = document.querySelector("#User_name");
  let password = document.querySelector("#password");
  let email = document.querySelector("#email");

  if (user_name.value === " " || password.value === " " || email.value === "") {
    let error_Message = document.querySelector("#errorMessage");
    error_Message.style.display = "block";
    error_Message.textContent = "Invalid username or password.";
  } else {
    console.log("Login form is successfully submitted. ");
    submit.textContent = "Submitted";
    window.alert("Form is submitted successfully");
    // Remove event after 3 seconds
    removeEvent();

    // Re-link the event
    submit.addEventListener("click", submitFunction);
  }
}

// Remove Event Function
function removeEvent() {
  setTimeout(() => {
    form.reset();
    console.log("Form reset. ");

    submit.removeEventListener("click", submitFunction);
    submit.textContent = "Submit";
  }, 3000);
}

// -------------------------------------------------------
