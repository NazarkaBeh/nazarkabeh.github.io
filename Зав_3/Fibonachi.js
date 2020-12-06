function fibonachi(f){
  var x = 1;
  var y = 1;
  var z;
  var i = 4;
  var array = [0, 1, 1];
    if (f < 3) {
      console.log("[0, 1, 1]");
    } else {
      while (i <= f)
      {
        z = x + y;
        x = y;
        y = z;
        array.push(y);
        i++
      }
      console.log(array);
    }
}
