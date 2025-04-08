const form = document.getElementById("form");
const fields = [
  document.getElementById("name"),
  document.getElementById("email"),
  document.getElementById("senha"),
  document.getElementById("csenha"),
];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkfields()) {
    alert("Sua mensagem foi enviada com sucesso");
  }
});
const validateEmail = (email) => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};
const checkfields = () => {
  let count = fields.reduce((acc, element) => {
    return checkSecondCondition(element)
      ? (acc += 1)
      : (element.classList = "input error");
  }, 0);
  return count >= 4;
};
const changeBorder = () => {
  fields.forEach((element) => {
    element.classList = "input";
  });
};
const checkLen = (field, length) => {
  if (field.value.length >= length) {
    return true;
  }
  return false;
};
const checkSecondCondition = (field) => {
  switch (field) {
    case fields[1]:
      return checkLen(field, 8) && validateEmail(field.value);
    case fields[3]:
      return checkLen(field, 8) && field.value == fields[2].value;
    default:
      return checkLen(field, 8);
  }
};
fields.forEach((element) => {
  element.addEventListener("focusin", () => {
    return checkSecondCondition(element)
      ? (element.classList = "input")
      : (element.classList = "input error");
  });
  element.addEventListener("focusout", () => {
    return checkSecondCondition(element)
      ? (element.classList = "input")
      : (element.classList = "input error");
  });
});
