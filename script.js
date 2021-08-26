let count = 0;

let counterValue = document.getElementById("count");

document.getElementById("incerase").addEventListener("click", function () {
  count++;
  counterValue.textContent = count;
});

document.getElementById("decrease").addEventListener("click", function () {
  count--;
  counterValue.textContent = count;
});
