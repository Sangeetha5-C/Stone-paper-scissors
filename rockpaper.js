let player = document.querySelectorAll("button");
var cpu = document.querySelector("#cpu");
let result = document.querySelector("#result");
let finalResult;

player.forEach((val) => {
  val.addEventListener("click", function (e) {
    let playerSelection = e.target.id;
    let cpuNo = Math.floor(Math.random() * 3);

    let cpuSelection;

    console.log(playerSelection);
    if (cpuNo == 0) {
      cpuSelection = "rockImg";
    } else if (cpuNo == 1) {
      cpuSelection = "paperImg";
    } else {
      cpuSelection = "scissorImg";
    }
    console.log(cpuSelection);

    if (
      (playerSelection == "rockImg" && cpuSelection == "rockImg") ||
      (playerSelection == "paperImg" && cpuSelection == "paperImg") ||
      (playerSelection == "scissorImg" && cpuSelection == "scissorImg")
    ) {
      finalResult = "its draw";
    } else if (
      (playerSelection == "rockImg" && cpuSelection == "scissorImg") ||
      (playerSelection == "paperImg" && cpuSelection == "rockImg") ||
      (playerSelection == "scissorImg" && cpuSelection == "paperImg")
      
    ) {
      finalResult = "you win";
    } else {
      finalResult = "you loose";
    }
    console.log(finalResult);

    cpu.innerText = cpuSelection;
    result.innerText = finalResult;
  });
});

