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

document.getElementById("blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});
document.getElementById("home").addEventListener("click", function () {
  window.location.href = "index.html";
});
