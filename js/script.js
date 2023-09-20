const list = document.querySelector("ul");
const nRandom = random();
setTimeout(reset,5000);




function random(){
  let nRandom = [];
  for(let i = 0; i < 5; i++){
    nRandom.push(Math.ceil(Math.random() * 100));
    list.innerHTML += `<li>${nRandom[i]}</li>`;
  }
  return nRandom;
}

function reset(){
  list.innerHTML = "";
}