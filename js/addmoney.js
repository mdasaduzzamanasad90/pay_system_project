// add monney function
document.getElementById("showaddmoney").addEventListener("click", function () {
  // console.log('all ok');
  document.getElementById("addmoneyfield").classList.remove("hidden");
  document.getElementById("cashoutfield").classList.add("hidden");
  document.getElementById("transitionhistoryfield").classList.add("hidden");
});

// add money input field
document.getElementById("addmoney").addEventListener("click", function (event) {
  event.preventDefault();

  // money
  const addmoney = addmoneyinputfield("AddMoney");

  // pin
  const pinnumber = addmoneyinputfield("Pin-Number");

  // main balance
  const mainbalance = mainbalancefield("main-balance");

  // condition not a number
  if (isNaN(addmoney)) {
    alert("please inter your amount");
    return;
  }

  // check password
  if (pinnumber == 1234) {
    const sum = mainbalance + addmoney;
    document.getElementById("main-balance").innerText = sum;

    // add Transaction history
    const p = document.createElement("p");
    p.style.color='green';
    p.innerText = `Add-Money ${addmoney} BDT . New Balance ${sum} BDT`;

    document.getElementById("transitionhistoryfield").appendChild(p);

    // input field clear
    document.getElementById("AddMoney").value = "";
    document.getElementById("Pin-Number").value = "";
  } else {
    alert("wrong password sorry-please try again");
  }
});
