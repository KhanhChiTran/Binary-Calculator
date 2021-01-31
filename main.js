const wrap = document.getElementById("container");
wrap.addEventListener("click", function (e) {
  let value = e.target.innerHTML;
  let res = document.getElementById("res");
  switch (value) {
    case "0":
    case "1":
    case "+":
    case "-":
    case "*":
    case "/":
      res.innerHTML += value;
      break;
    case "C":
      res.innerHTML = "";
      break;
    case "=":
      let expr = res.innerHTML;
      let nums = /(\d+)/g;
      expr = expr.replace(nums, function (match) {
        return parseInt(match, 2);
      });
      res.innerHTML = eval(expr).toString(2);

    default:
      break;
  }
});
