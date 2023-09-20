const list = document.querySelector("ul");
const message = document.querySelector("h1");
let listPrompt = [];
const nRandom = random();
setTimeout(reset,5000);
setTimeout(time,5020);

function random(){
  let nRandom = [];
  let checkRandom;
  let counter = 0;
  do{

    checkRandom = Math.ceil(Math.random() * 100);

    if(!(nRandom.includes(checkRandom))){
      nRandom.push(Math.ceil(Math.random() * 100));
      list.innerHTML += `<li>${nRandom[i]}</li>`;
      counter++
    }

  }while(counter < 5);
  
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
  let double = []; 
  for(let i = 0; i < 5; i++){
    if(nRandom.includes(listPrompt[i])){
      if( !(double.includes(listPrompt[i])) ){
        double.push(listPrompt[i]);
        list.innerHTML += `<li>${listPrompt[i]}</li>`;
        count ++;
      }
    }
  }
  message.innerHTML = "Hai indovinato " + count + " numeri su 5";
}


