function Gra() {
  var kost1 = document.querySelector(".Kost1");
  var kost2 = document.querySelector(".Kost2");
  var kost3 = document.querySelector(".Kost3");
  var num1 = Math.floor(Math.random() * 6) + 1;
  var num2 = Math.floor(Math.random() * 6) + 1;
  if (num1 == num2) {
      kost3.innerHTML = "Draw!";
  }   else if (num1 > num2) {
      kost3.innerHTML = "Player 1 Win!";
  }   else if (num1 < num2) {
      kost3.innerHTML = "Player 2 Win!";
  }
  if (num1 == 1) {
  kost1.style.backgroundImage="url('1.png')";
  } else if (num1 == 2) {
  kost1.style.backgroundImage="url('2.png')";
  } else if (num1 == 3) {
  kost1.style.backgroundImage="url('3.png')";
  } else if (num1 == 4) {
  kost1.style.backgroundImage="url('4.png')";
  } else if (num1 == 5) {
  kost1.style.backgroundImage="url('5.png')";
  } else {
  kost1.style.backgroundImage="url('6.png')";
  }

  if (num2 ==1) {
  kost2.style.backgroundImage="url('1.png')";
  } else if (num2 ==2) {
  kost2.style.backgroundImage="url('2.png')";
  } else if (num2 == 3) {
  kost2.style.backgroundImage="url('3.png')";
  } else if (num2 == 4) {
  kost2.style.backgroundImage="url('4.png')";
  } else if (num2 == 5) {
  kost2.style.backgroundImage="url('5.png')";
  } else {
  kost2.style.backgroundImage="url('6.png')";
  }
}
