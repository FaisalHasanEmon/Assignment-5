// NoaKhali
document
  .getElementById("btn-noakhali")
  .addEventListener("click", function (event) {
    event.preventDefault();
    validationAndOperation(
      "noakhali-balance",
      "donate-noakhali",
      "main-balance",
      " famine-2024 at Noakhali, Bangladesh"
    );
  });
// Feni
document.getElementById("btn-feni").addEventListener("click", function (event) {
  event.preventDefault();
  validationAndOperation(
    "feni-balance",
    "donate-feni",
    "main-balance",
    " Flood Relief in Feni,Bangladesh"
  );
});
// Quota Movement
document.getElementById("btn-aid").addEventListener("click", function (event) {
  event.preventDefault();
  validationAndOperation(
    "aid-balance",
    "donate-aid",
    "main-balance",
    " Aid for Injured in the Quota Movement"
  );
});
