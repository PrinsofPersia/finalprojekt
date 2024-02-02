const nextButton = document.getElementById('nextButton');
const cardModal = document.getElementById('cardModal');
const cardTitle = document.getElementById('cardTitle');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');


nextButton.addEventListener('click', () => { 
  cardModal.style.display = 'block';  
 
  cardTitle.textContent = 'Вы подтверждаете заказ';
});

yesButton.addEventListener('click', () => {
  
  localStorage.setItem('ответ', 'да');
  cardModal.style.display = 'none'; 
});


noButton.addEventListener('click', () => {  
  localStorage.setItem('ответ', 'нет');
  cardModal.style.display = 'none'; 
});