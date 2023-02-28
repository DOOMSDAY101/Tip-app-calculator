document.getElementById('amount-1').innerText = "$" + "0.00";
  document.getElementById('total-1').innerText = "$" + "0.00";

  function bill() {
    amount = document.getElementById('amount');
    amount1 = parseFloat(document.getElementById('amount').value);
    text = document.getElementById('text');
    text.innerHTML = "";


    try {
      if (isNaN(amount1)) throw "Only numerical values accepted";
    } catch (error) {
      text.innerHTML = error;
      amount1 = 0;
    }
  }

  function tipPer(per) {
    let btn = document.getElementById('btn').value;
    ans = (per / 100) * amount1;
    document.getElementById('amount-1').innerText = "$" + ans.toFixed(2);

    //function to automatically calculate the total amount for the total tip paid
    
    let pple = parseInt(document.getElementById('num').value);
    var ans2 = pple * ans;
    document.getElementById('total-1').innerHTML = "$" + ans2.toFixed(2);
    
  }

  function noOfPeople() {
    let no = document.getElementById('num');
    let pple = parseInt(document.getElementById('num').value);
    let text3 = document.getElementById('text3');
    text3.innerHTML = "";
    
    if (isNaN(pple)) {
      pple = 0;
    }

    try {
      if (no.value < 0) throw "Input only postive value";
    } catch (error) {
      text3.innerHTML = error;
    }

    var ans2 = pple * ans;
    document.getElementById('total-1').innerHTML = "$" + ans2.toFixed(2);
  }

  function reset() {
    document.getElementById('amount').value = "0.00";
    document.querySelector('.btn1').value = "";
    amount1 = 0;
    document.getElementById("num").value = 1;
    document.getElementById('amount-1').innerText = "$" + "0.00";
    document.getElementById('total-1').innerText = "$" + "0.00";
    
  }