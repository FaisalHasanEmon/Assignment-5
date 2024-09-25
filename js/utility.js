function getValueById(id) {
  const getMoneyById = document.getElementById(id).innerText;
  const setMoneyById = parseFloat(getMoneyById);
  return setMoneyById;
}

function getInputValue(id) {
  const getMoneyByInput = document.getElementById(id).value;
  const setMoneyByInput = parseFloat(getMoneyByInput);
  return setMoneyByInput;
}

function validationAndOperation(id, input, main) {
  const getNoakhaliBalance = getValueById(id);
  const getMainBalance = getValueById(main);
  const getInputMoney = getInputValue(input);
  if (
    !isNaN(getInputMoney) === true &&
    getInputMoney >= 0 &&
    getInputMoney <= getMainBalance
  ) {
    const noakhaliGot = getNoakhaliBalance + getInputMoney;
    const leftMoney = getMainBalance - getInputMoney;

    document.getElementById(id).innerText = noakhaliGot;
    document.getElementById(main).innerText = leftMoney;
    document.getElementById(input).value = "";
  } else {
    document.getElementById(input).value = "";
    alert("Failed to Donate Money");
  }
}
