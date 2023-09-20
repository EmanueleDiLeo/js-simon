const list = document.querySelector("ul");
const message = document.querySelector("h1");
let listPrompt = [];
const nRandom = random();
setTimeout(reset,5000);
setTimeout(time,5020);

function random(){
  let nRandom = [];
  for(let i = 0; i < 5; i++){
    nRandom.push(Math.ceil(Math.random() * 100));
    list.innerHTML += `<li>${nRandom[i]}</li>`;
  }
  return nRandom;
}

function time(){
  prompts();
  check();
}

function reset(){
  list.innerHTML = "";
  message.innerHTML = "";
}

function prompts(){
  for(let i = 0; i < 5; i++){
    listPrompt.push(parseInt(prompt("Inserisci il " + (i+1) + " numero")));
  }
}

function check(){
  let count = 0;
  for(let i = 0; i < 5; i++){
    if(nRandom.includes(listPrompt[i])){
      list.innerHTML += `<li>${listPrompt[i]}</li>`;
      count ++;
    }
  }
  message.innerHTML = "Hai indovinato " + count + " numeri su 5";
}


