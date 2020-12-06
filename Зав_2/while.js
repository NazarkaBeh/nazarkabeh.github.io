var name = "Nazarii";
var surname = "Beh";
var i = 100;

function sequenceWhile(){
while(i >= 1){
  if ((i % 3) == 0 && (i % 5) == 0){
    console.log(name + " " + surname);
  } else if (i % 5 == 0){
    console.log(surname);
  } else if (i % 3 == 0){
    console.log(name);
  } else {
    console.log(i);
  }
  i--;
  }
}
sequenceWhile();
