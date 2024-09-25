document.getElementById("donation").addEventListener("click", function (event) {
  event.preventDefault();
  showpage("donation-section");
  changeBtn("donation");
});
document.getElementById("history").addEventListener("click", function (event) {
  event.preventDefault();
  showpage("history-section");
  changeBtn("history");
});
