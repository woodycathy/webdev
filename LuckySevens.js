function startGame() {
  var gameMoney = document.forms["playGame"]["startingBet"].value;
  document.getElementById("startingBetMoney").innerText = "$" + gameMoney;
  var rollCount = 0;
  var highAmount = 0;
  var newRollCount = 0;

  if (gameMoney <= 0 || isNaN(gameMoney))
  {
    alert("Starting bet money should be more than 0");
    return false;
  }

  highAmount = gameMoney;

  console.log("gameMoney Initial:"+gameMoney);

  do {
    var rollSum = rollDice() + rollDice();
    console.log("rollSum:"+rollSum);
    if (rollSum == 7)
    {
      gameMoney += 4;
    }
    else {
      gameMoney -= 1;
    }
    rollCount++;
    console.log("gameMoney:"+gameMoney);
    console.log("rollCount:"+rollCount);
    if (gameMoney > highAmount)
    {
      highAmount = gameMoney;
      newRollCount = rollCount;
    }
    console.log("highAmount:"+highAmount);
    console.log("newRollCount:"+newRollCount);
  } while (gameMoney > 0);
  document.getElementById("results").style.display = "block";
  document.getElementById("TRBGB").innerText = rollCount;
  document.getElementById("HAW").innerText = "$" + highAmount;
  document.getElementById("RCHAW").innerText = newRollCount;
  console.log("Finished");
  return false;

}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function resetForm() {
    document.forms["playGame"]["startingBet"].value = "";
    document.getElementById("results").style.display = "none";
    document.forms["playGame"]["startingBet"].focus();
}
