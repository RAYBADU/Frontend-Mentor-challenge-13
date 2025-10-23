const hashTagNum = document.getElementById("num");
const diceBtn = document.getElementById("diceBtn");
const text = document.getElementById("text");

diceBtn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const advice = data.slip.advice;
      const id = data.slip.id;
      text.innerHTML = `${advice}

`;
      hashTagNum.innerHTML = `${id}`;
    })
    .catch((error) => console.log(error));
});
