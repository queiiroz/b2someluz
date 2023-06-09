const images = document.querySelectorAll(".slider");
const size = images.length;
let selectedIndex = 0;

function next() {
  images[selectedIndex].classList.remove("selected");
  selectedIndex++;
  if (selectedIndex >= size) {
    selectedIndex = 0;
  }
  images[selectedIndex].classList.add("selected");
}

function prev() {
  images[selectedIndex].classList.remove("selected");
  selectedIndex--;
  if (selectedIndex < 0) {
    selectedIndex = size - 1;
  }
  images[selectedIndex].classList.add("selected");
}
