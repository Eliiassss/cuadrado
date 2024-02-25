document.addEventListener("DOMContentLoaded", function() {
    const square = document.getElementById("square");
    const colorForm = document.getElementById("color-form");
    const colorSelect = document.getElementById("color-select");
  
    colorForm.addEventListener("change", function() {
      const selectedColor = colorSelect.value;
      square.style.backgroundColor = selectedColor;
    });
  });
  