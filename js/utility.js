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

function time() {
  const date = new Date();
  const dayName = date.toLocaleString("en-US", { weekday: "short" });
  const monthName = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  const time = date.toTimeString().split(" ")[0];
  const timeZone = date.toTimeString().split(" ")[1];
  const timeZoneName = Intl.DateTimeFormat("en", { timeZoneName: "long" })
    .format(date)
    .split(" ")
    .slice(1)
    .join(" ");

  return `Date: ${dayName} ${monthName} ${day} ${year} ${time} ${timeZone} (${timeZoneName})`;
}

console.log(getFormattedDate());

function validationAndOperation(id, input, main, name) {
  const getNoakhaliBalance = getValueById(id);
  const getMainBalance = getValueById(main);
  const getInputMoney = getInputValue(input);
  if (
    !isNaN(getInputMoney) === true &&
    getInputMoney >= 1 &&
    getInputMoney <= getMainBalance
  ) {
    const noakhaliGot = getNoakhaliBalance + getInputMoney;
    const leftMoney = getMainBalance - getInputMoney;

    document.getElementById(id).innerText = noakhaliGot;
    document.getElementById(main).innerText = leftMoney;
    document.getElementById(input).value = "";

    document.getElementById("taka").innerHTML = "";
    const div2 = document.createElement("div");
    div2.innerHTML = `
     <p class="font-medium text-2xl mt-1">${getInputMoney} BDT</p>
    `;
    document.getElementById("taka").appendChild(div2);

    document.getElementById("my_modal_5").showModal();

    // Transaction
    const div = document.createElement("div");
    div.innerHTML = `
          <div class="container mx-auto lg:px-[150px] my-1">
            <div class="w-full border rounded-2xl p-4 lg:p-[32px]">
            <h1 class="font-bold text-xl text-DeepBlue">${getInputMoney} Taka is donated for ${name} </h1>
            <p style="color:rgba(17, 17, 17, 0.7)">${time()}<p>
            </div>
          </div>
    `;
    document.getElementById("history-section").appendChild(div);

    document.getElementById("history-section").appendChild(div);
  } else {
    document.getElementById(input).value = "";
    alert("Failed to Donate Money");
  }
}

// Shows History and Donation
function showpage(id) {
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");
  // Make Visible
  document.getElementById(id).classList.remove("hidden");
}

//Change Button
function changeBtn(id) {
  document.getElementById("donation").className = "";
  document
    .getElementById("donation")
    .classList.add(
      "btn",
      "btn-outline",
      "font-semibold",
      "text-xl",
      "text-txtGray",
      "w-[157px]"
    );

  document.getElementById("history").className = "";
  document
    .getElementById("history")
    .classList.add(
      "btn",
      "btn-outline",
      "font-semibold",
      "text-xl",
      "text-txtGray",
      "w-[136px]"
    );

  // Now Make It Green
  document.getElementById(id).className = "";
  if (id === "donation") {
    document
      .getElementById(id)
      .classList.add(
        "btn",
        "bg-grnBtn",
        "font-semibold",
        "text-xl",
        "text-DeepBlue",
        "w-[157px]"
      );
  } else if (id === "history") {
    document
      .getElementById(id)
      .classList.add(
        "btn",
        "bg-grnBtn",
        "font-semibold",
        "text-xl",
        "text-DeepBlue",
        "w-[136px]"
      );
  }
}
