/* Savings files javascript file */

function calculate() {
  let item = document.getElementById("item").value;
  let price = parseFloat(document.getElementById("price").value);
  let allowance = parseFloat(document.getElementById("allowance").value);
  let allowanceType = document.getElementById("allowanceType").value;
  let time = parseFloat(document.getElementById("time").value);
  let timeType = document.getElementById("timeType").value;
  if (!price || !time) {
    alert("Please enter price and time");
    return;
  }
  let days = time;
  if (timeType == "weeks") days = time * 7;
  if (timeType == "months") days = time * 30;
  let perDay = price / days;
  let perWeek = perDay * 7;
  document.getElementById("display").innerText = "₹" + price;
  document.getElementById("summary").innerHTML =
    "<b>Goal:</b> " + item + "<br><b>Price:</b> ₹" + price;
  document.getElementById("saveDaily").innerText =
    "You must save ₹" + perDay.toFixed(2) + " per day";
  document.getElementById("saveWeekly").innerText =
    "or ₹" + perWeek.toFixed(2) + " per week";
  document.getElementById("result").style.display = "block";
  document.getElementById("bar").style.width = "100%";
}
