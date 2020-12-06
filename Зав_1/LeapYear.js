function leap (year) {

  if ((year % 100) == 0) {
    if ((year % 400) == 0) {
      console.log("Рік  є високосним");
    } else {
      console.log("Рік не є високосним");
    }
  } else if ((year % 4) == 0) {
    console.log("Рік є високосним");
  } else {
    console.log("Рік не є високосним");
  }
}
