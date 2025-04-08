let record = "";
let actualdigit = "";
const addValueToCount = (val) => {
  if (actualval.innerText.startsWith("0")) {
    actualval.innerText = "";
    actualdigit = "";
  }
  if (recordelement.innerText.startsWith("0")) {
    recordelement.innerText = "";
    record = "";
  }
  record = `${record}${val}`;
  actualdigit = `${actualdigit}${val}`;
};
const digits = document.getElementById("digits");
const recordelement = document.getElementById("record");
const actualval = document.getElementById("total");
const digitsbuttons = [];
for (let i = 1; i < 19; i++) {
  const button = document.createElement("button");
  if (i === 3 || i === 7 || i === 11 || i === 15 || i === 18) {
    button.classList = `specialdigit val${i}`;
  } else {
    button.classList = `digit val${i}`;
  }
  button.addEventListener("click", (e) => {
    switch (i) {
      case 1:
        actualdigit = "0";
        record = "0";
        break;
      case 2:
        record = record.slice(0, -1);
        actualdigit = actualdigit.slice(0, -1);
        if (record === "" || actualdigit === "") {
          record = "0";
          actualdigit = "0";
        }
        break;
      case 3:
        if (record.indexOf("/") === -1) {
          actualdigit = 0;
          record = `${record} / `;
        } else {
          [var1, var2] = record.split("/");
          record = `${parseFloat(var1.trim()) / parseFloat(var2.trim())} /`;
          actualdigit = `${parseFloat(var1.trim()) / parseFloat(var2.trim())}`;
        }
        break;
      case 4:
        addValueToCount("1");
        break;
      case 5:
        addValueToCount("2");
        break;
      case 6:
        addValueToCount("3");
        break;
      case 7:
        if (record.indexOf("*") === -1) {
          actualdigit = 0;
          record = `${record} * `;
        } else {
          [var1, var2] = record.split("*");
          record = `${parseFloat(var1.trim()) * parseFloat(var2.trim())} *`;
          actualdigit = `${parseFloat(var1.trim()) * parseFloat(var2.trim())}`;
        }
        break;
      case 8:
        addValueToCount("4");
        break;
      case 9:
        addValueToCount("5");
        break;
      case 10:
        addValueToCount("6");
        break;
      case 11:
        if (record.indexOf("+") === -1) {
          actualdigit = 0;
          record = `${record} + `;
        } else {
          [var1, var2] = record.split("+");
          record = `${parseFloat(var1.trim()) + parseFloat(var2.trim())} +`;
          actualdigit = `${parseFloat(var1.trim()) + parseFloat(var2.trim())}`;
        }
        break;
      case 12:
        addValueToCount("7");
        break;
      case 13:
        addValueToCount("8");
        break;
      case 14:
        addValueToCount("9");
        break;
      case 15:
        if (record.indexOf("-") === -1) {
          actualdigit = 0;
          record = `${record} - `;
        } else {
          [var1, var2] = record.split("-");
          record = `${parseFloat(var1.trim()) - parseFloat(var2.trim())} -`;
          actualdigit = `${parseFloat(var1.trim()) - parseFloat(var2.trim())}`;
        }
        break;
      case 16:
        addValueToCount(".");
        break;
      case 17:
        addValueToCount("0");
      case 18:
        if (record.indexOf("/") !== -1 && record.split("/").length > 1) {
          [var1, var2] = record.split("/");
          if (parseFloat(var1.trim()) / parseFloat(var2.trim()) == "NaN") {
            record = `0`;
            actualdigit = `0`;
          }
          record = `${parseFloat(var1.trim()) / parseFloat(var2.trim())}`;
          actualdigit = `${parseFloat(var1.trim()) / parseFloat(var2.trim())}`;
          break;
        }
        if (record.indexOf("*") !== -1 && record.split("*").length > 1) {
          [var1, var2] = record.split("*");
          if (parseFloat(var1.trim()) * parseFloat(var2.trim()) == "NaN") {
            record = `0`;
            actualdigit = `0`;
          }
          record = `${parseFloat(var1.trim()) * parseFloat(var2.trim())}`;
          actualdigit = `${parseFloat(var1.trim()) * parseFloat(var2.trim())}`;
          break;
        }
        if (record.indexOf("-") !== -1 && record.split("-").length > 1) {
          [var1, var2] = record.split("-");
          record = `${parseFloat(var1.trim()) - parseFloat(var2.trim())} `;
          actualdigit = `${parseFloat(var1.trim()) - parseFloat(var2.trim())}`;
          break;
        }
        if (record.indexOf("+") !== -1 && record.split("+").length > 1) {
          [var1, var2] = record.split("+");
          record = `${parseFloat(var1.trim()) + parseFloat(var2.trim())}`;
          actualdigit = `${parseFloat(var1.trim()) + parseFloat(var2.trim())}`;
          break;
        }
        record = record;
        actualdigit = actualdigit;
        break;
      default:
        record = `${record}${i}`;
        actualdigit = `${actualdigit}${i}`;
        break;
    }
    recordelement.innerText = record;
    actualval.innerText = actualdigit;
  });
  digitsbuttons.push(button);
  setInnerText(digitsbuttons[i - 1], i);
  digits.appendChild(button);
}
