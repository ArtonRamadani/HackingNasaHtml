var totalProgress = 0;
function hackNasa() {
  if (totalProgress == 0) {
    var progBar = document.getElementById('progress');
    var progMeterBox = document.getElementById('prog-percent');
    var foundOutReveal = document.getElementById('found-out');
    var width = 20;
    var progInt = setInterval(frame, 100);

    function frame() {
      if (width >= 100) {
        clearInterval(progInt);
        progMeterBox.textContent = "Sucesfully hacked NASA..."
        foundOutReveal.style.display = "block";
      } else {
        width++;
        progBar.style.width = width + "%";
        progMeterBox.textContent = width + "%";
        progMeterBox.style.visibility = "visible";
        foundOutReveal.style.display = "none";
      }
    }
  }
}