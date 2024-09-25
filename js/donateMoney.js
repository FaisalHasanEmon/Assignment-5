// NoaKhali
document
  .getElementById("btn-noakhali")
  .addEventListener("click", function (event) {
    event.preventDefault();
    validationAndOperation(
      "noakhali-balance",
      "donate-noakhali",
      "main-balance"
    );
  });
