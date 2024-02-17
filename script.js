console.log("Script added.");

if (!localStorage.getItem("game")) {
  localStorage.setItem(
    "game",
    JSON.stringify({
      my: 0,
      comp: 0,
    })
  );
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let game_area = document.getElementById("game_area");
let game_decesion = document.getElementById("game_decesion");

let play_again_btn = document.getElementById("play_again_btn");
let next_btn = document.getElementById("next_btn");

let my_score = document.getElementById("my_score");
let comp_score = document.getElementById("comp_score");

let scores = JSON.parse(localStorage.getItem("game"));
my_score.innerText = scores["my"];
comp_score.innerText = scores["comp"];

function decesion(my_chosed_num) {
  let random_num = getRandomInt(3);

  //    rock = 0;  paper = 1;  scissors = 2;

  if (my_chosed_num == random_num) {
    return [random_num, "Tie Up"];
  } else if (my_chosed_num == 0 && random_num == 1) {
    return [random_num, "You Lost"];
  } else if (my_chosed_num == 1 && random_num == 2) {
    return [random_num, "You Lost"];
  } else if (my_chosed_num == 2 && random_num == 0) {
    return [random_num, "You Lost"];
  } else {
    return [random_num, "You Win"];
  }
}

rock.addEventListener("click", function () {
  next_btn.style.display = "none";
  let res = decesion(0);
  let scores = JSON.parse(localStorage.getItem("game"));

  if (res[1] === "Tie Up") {
    // Do nothing
  } else if (res[1] === "You Lost") {
    scores["comp"] += 1;
  } else {
    scores["my"] += 1;
    next_btn.style.display = "flex";
  }

  localStorage.setItem("game", JSON.stringify(scores));
  my_score.innerText = scores["my"];
  comp_score.innerText = scores["comp"];

  game_area.style.display = "none";
  game_decesion.style.display = "flex";

  let img1 = document.getElementById("img1");
  let img2 = document.getElementById("img2");

  img1.src = "rock.svg";
  img2.src =
    res[0] === 0 ? "rock.svg" : res[0] === 1 ? "paper.svg" : "scissors.svg";

  document.querySelector("#game_decesion").children[1].children[0].innerText =
    res[1];

  let user_won = document.getElementById("user_won");
  let comp_won = document.getElementById("comp_won");

  if (res[1] === "You Lost") {
    comp_won.className = "circles";
  } else if (res[1] === "You Win") {
    user_won.className = "circles";
  }
});

paper.addEventListener("click", function () {
  next_btn.style.display = "none";
  let res = decesion(1);
  let scores = JSON.parse(localStorage.getItem("game"));

  if (res[1] == "Tie Up") {
    // Do nothing
  } else if (res[1] == "You Lost") {
    scores["comp"] += 1;
  } else {
    scores["my"] += 1;
    next_btn.style.display = "flex";
  }

  localStorage.setItem("game", JSON.stringify(scores));
  my_score.innerText = scores["my"];
  comp_score.innerText = scores["comp"];

  game_area.style.display = "none";
  game_decesion.style.display = "flex";

  let img1 = document.getElementById("img1");
  let img2 = document.getElementById("img2");

  img1.src = "paper.svg";
  img2.src =
    res[0] === 0 ? "rock.svg" : res[0] === 1 ? "paper.svg" : "scissors.svg";

  document.querySelector("#game_decesion").children[1].children[0].innerText =
    res[1];

  let user_won = document.getElementById("user_won");
  let comp_won = document.getElementById("comp_won");

  if (res[1] === "You Lost") {
    comp_won.className = "circles";
  } else if (res[1] === "You Win") {
    user_won.className = "circles";
  }
});

scissors.addEventListener("click", function () {
  next_btn.style.display = "none";
  let res = decesion(2);
  let scores = JSON.parse(localStorage.getItem("game"));

  if (res[1] == "Tie Up") {
    // Do nothing
  } else if (res[1] == "You Lost") {
    scores["comp"] += 1;
  } else {
    scores["my"] += 1;
    next_btn.style.display = "flex";
  }

  localStorage.setItem("game", JSON.stringify(scores));
  my_score.innerText = scores["my"];
  comp_score.innerText = scores["comp"];

  game_area.style.display = "none";
  game_decesion.style.display = "flex";

  let img1 = document.getElementById("img1");
  let img2 = document.getElementById("img2");

  img1.src = "scissors.svg";
  img2.src =
    res[0] === 0 ? "rock.svg" : res[0] === 1 ? "paper.svg" : "scissors.svg";

  document.querySelector("#game_decesion").children[1].children[0].innerText =
    res[1];

  let user_won = document.getElementById("user_won");
  let comp_won = document.getElementById("comp_won");

  if (res[1] === "You Lost") {
    comp_won.className = "circles";
  } else if (res[1] === "You Win") {
    user_won.className = "circles";
  }
});

play_again_btn.addEventListener("click", function () {
  game_area.style.display = "flex";
  game_decesion.style.display = "none";

  let user_won = document.getElementById("user_won");
  let comp_won = document.getElementById("comp_won");

  user_won.className = "";
  comp_won.className = "";
  next_btn.style.display = "none";
});
