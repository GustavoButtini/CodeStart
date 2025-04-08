const setInnerText = (digit, count) => {
  switch (count) {
    case 1:
      digit.innerHTML = "AC";
      break;
    case 2:
      digit.innerHTML = "DEL";
      break;
    case 3:
      digit.innerHTML = "/";
      break;
    case 4:
      digit.innerHTML = "1";
      break;
    case 5:
      digit.innerHTML = "2";
      break;
    case 6:
      digit.innerHTML = "3";
      break;
    case 7:
      digit.innerHTML = "*";
      break;
    case 8:
      digit.innerHTML = "4";
      break;
    case 9:
      digit.innerHTML = "5";
      break;
    case 10:
      digit.innerHTML = "6";
      break;
    case 11:
      digit.innerHTML = "+";
      break;
    case 12:
      digit.innerHTML = "7";
      break;
    case 13:
      digit.innerHTML = "8";
      break;
    case 14:
      digit.innerHTML = "9";
      break;
    case 15:
      digit.innerHTML = "-";
      break;
    case 16:
      digit.innerHTML = ".";
      break;
    case 17:
      digit.innerHTML = "0";
      break;
    case 18:
      digit.innerHTML = "=";
      break;
  }
};
