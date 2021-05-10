var hh = 0;
var mm = 0;
var ss = 0;
var stopTime = true;
var hour = document.getElementById("hour");
var min = document.getElementById("minutes");
var sec = document.getElementById("seconds");
function timerCycle() {
  if (stopTime == false) {
    ss = parseInt(ss);
    hh = parseInt(hh);
    mm = parseInt(mm);
    ss = ss + 1;
    if (ss == 60) {
      ss = 0;
      mm = mm + 1;
      if (mm == 60) {
        mm = 0;
        hh = hh + 1;
      }
    }
    if (ss < 10) {
      ss = "0" + ss;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (hh < 10) {
      hh = "0" + hh;
    }
    hour.innerHTML = hh;
    min.innerHTML = mm;
    sec.innerHTML = ss;
    setTimeout("timerCycle()", 1000);
  }
}
function startTimer() {
  if (stopTime === true) {
    stopTime = false;
    timerCycle();
  }
}
function stopTimer() {
  if (stopTime === false) {
    stopTime = true;
  }
}
function resetTimer() {
  hour.innerHTML = "00";
  min.innerHTML = "00";
  sec.innerHTML = "00";
  stopTime = true;
  hh = 0;
  ss = 0;
  mm = 0;
}
