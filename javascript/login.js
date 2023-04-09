const loginPassword = document.querySelector("#logInPassword");

// bootstrap form validation
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function checkInput(input) {
  var value = input.value;

  if (value.length < 8) {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
  } else {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
  }
}
