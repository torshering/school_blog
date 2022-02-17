let viewtext = document.querySelectorAll(".viewtext p");
for (let elem of viewtext) {
  elem.addEventListener("click", function () {
      (elem.parentElement).parentElement.classList.toggle('opened');
});
}