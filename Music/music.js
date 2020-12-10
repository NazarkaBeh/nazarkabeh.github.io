function sound(instrument) {

    var record = new Audio('sounds/' + instrument + '.mp3');
    var knopka = document.querySelector('#' + instrument);
    knopka.style.backgroundColor = "white";
    record.play();
    switch(instrument) {
        case 'fleyta':
            setTimeout(clearBg, 11000);
            break;
        case 'fortepiano':
            setTimeout(clearBg, 9000);
            break;
        case 'garmoshka':
            setTimeout(clearBg, 8000);
            break;
        case 'gitara':
            setTimeout(clearBg, 6000);
            break;
        case 'kontrabas':
            setTimeout(clearBg, 16000);
            break;
        case 'skripka':
            setTimeout(clearBg, 4000);
            break;
        case 'truba':
            setTimeout(clearBg, 9000);
            break;
        default:
            break;
    function clearBg() {
        knopka.style.backgroundColor = "#00FFFF";
    }
  }
}
document.addEventListener("keydown", function(event) {
  switch(event.key)
  {
    case "1" :
      sound('fleyta');
      break;
    case "2" :
      sound('fortepiano');
      break;
    case "3" :
      sound('garmoshka');
      break;
    case "4" :
      sound('gitara');
      break;
    case "5" :
      sound('kontrabas');
      break;
    case "6" :
      sound('skripka');
      break;
    case "7" :
      sound('truba');
      break;
    default:
      break;
  }
})
