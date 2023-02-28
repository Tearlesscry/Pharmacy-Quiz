const form = document.forms.quiz;
const item1 = form.item1;
const item2 = form.item2;
const item3 = form.item3;
const item4 = form.item4;
const item5 = form.item5;
const item6 = form.item6;
const item7 = form.item7;
const item8 = form.item8;
const item9 = form.item9;
const item10 = form.item10;
const answer1 = document.getElementById('answer-item1');
const answer2 = document.getElementById('answer-item2');
const answer3 = document.getElementById('answer-item3');
const answer4 = document.getElementById('answer-item4');
const answer5 = document.getElementById('answer-item5');
const answer6 = document.getElementById('answer-item6');
const answer7 = document.getElementById('answer-item7');
const answer8 = document.getElementById('answer-item8');
const answer9 = document.getElementById('answer-item9');
const answer10 = document.getElementById('answer-item10');

const submit = form.submitBtn;

const correctAnswers = {
  item1: 'Ammonium chloride',
  item2: 'Ceftriaxone',
  item3: 'carvedilol',
  item4: 'norepinephrine',
  item5: 'cocaine',
  item6: 'tetrodotoxin',
  item7: 'morphine',
  item8: 'dexamethasone',
  item9: 'anorexigenic',
  item10: 'basic_dye'
};

let score = 0;

form.addEventListener('submit', e => {
  e.preventDefault();

  
  if (item1.value == 'Ammonium chloride') {
    checker(answer1);
  } else if (!item1.value) {
    required(answer1)
  } else {
    wrongAnswer(answer1);
  };

  if (item2.value == 'Ceftriaxone') {
    checker(answer2)
  } else if (!item2.value){
    required(answer2)
  } else {
    wrongAnswer(answer2)
  };

  if (item3.value == 'carvedilol'){
    checker(answer3);
  } else if (!item3.value) {
    required(answer3);
  } else {
    wrongAnswer(answer3);
  };

  if (item4.value == 'norepinephrine') {
    checker(answer4);
  } else if (!item4.value){
    required(answer4);
  } else {
    wrongAnswer(answer4);
  };

  if (item5.value == 'cocaine') {
    checker(answer5)
  } else if (!item5.value){
    required(answer5)
  } else {
    wrongAnswer(answer5)
  };

  if (item6.value == 'tetrodotoxin') {
    checker(answer6)
  } else if (!item6.value){
    required(answer6)
  } else {
    wrongAnswer(answer6)
  };

  if (item7.value == 'morphine') {
    checker(answer7)
  } else if (!item7.value){
    required(answer7)
  } else {
    wrongAnswer(answer7)
  };

  if (item8.value == 'dexamethasone') {
    checker(answer8)
  } else if (!item8.value){
    required(answer8)
  } else {
    wrongAnswer(answer8)
  };

  if (item9.value == 'anorexigenic') {
    checker(answer9)
  } else if (!item9.value){
    required(answer9)
  } else {
    wrongAnswer(answer9)
  };

  if (item10.value == 'basic_dye') {
    checker(answer10)
  } else if (!item10.value){
    required(answer10)
  } else {
    wrongAnswer(answer10)
  };
  

  for (const item in correctAnswers) {
    const userAnswer = form.elements[item].value;

    if (userAnswer === correctAnswers[item]) {
      score++; 
    }
  }
  alert(`Your score is ${score} out of ${Object.keys(correctAnswers).length}`);

  if (submit){
    score = 0
  }
  
});



const checker = field => {
  field.style.color = 'green'
  field.innerHTML = 'Correct Answer'
}

const wrongAnswer = field => {
  field.style.color = 'red'
  field.innerHTML = 'Wrong Answer'
}

const required = field => {
  field.innerHTML = 'Answer required'
}

