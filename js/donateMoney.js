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
// Feni
document.getElementById("btn-feni").addEventListener("click", function (event) {
  event.preventDefault();
  validationAndOperation("feni-balance", "donate-feni", "main-balance");
});
// Quota Movement
document.getElementById("btn-aid").addEventListener("click", function (event) {
  event.preventDefault();
  validationAndOperation("aid-balance", "donate-aid", "main-balance");
});
