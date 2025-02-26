// cash out function
document.getElementById("showcashout").addEventListener("click", function () {
    // console.log('all ok');
    document.getElementById("cashoutfield").classList.remove("hidden");
    document.getElementById("addmoneyfield").classList.add("hidden");
    document.getElementById("transitionhistoryfield").classList.add("hidden");

  });
  
  // cash out input field
  document.getElementById("cashout-button").addEventListener("click", function (event) {
    event.preventDefault();

  // money
  const cashout = addmoneyinputfield('cash-out');

  // pin
  const pinnumber = addmoneyinputfield('pinnumber');

  // main balance
  const mainbalance = mainbalancefield('main-balance');

  // condition not a number
  if (isNaN(cashout)) {
    alert('please inter your amount');
    return;
  }

  // check password
  if (pinnumber == 1234) {
    // condition Enough balance
    if (mainbalance < cashout) {
      
      alert('sorry - you have enough money on your account .');

    }

    else{

      const sum = mainbalance - cashout;
      document.getElementById('main-balance').innerText = sum;

      // add Transaction history
      const p = document.createElement('p');
      p.style.color='red';
      p.innerText = `Cash-Out ${cashout} BDT . New Balance ${sum} BDT`;

      document.getElementById('transitionhistoryfield').appendChild(p);
  
    // input field clear
      document.getElementById("cash-out").value = "";
      document.getElementById("pinnumber").value = "";

    }

  }
  
  else{
    alert("wrong password sorry-please try again");
  }

  
  });
  