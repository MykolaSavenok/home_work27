import '/css/style.css'

const magicBall = document.querySelector('.ball-image');
const askButton = document.getElementById('ask-button');
const answerDiv = document.getElementById('answer');

askButton.addEventListener('click', () => {

   magicBall.classList.add('shake');

   setTimeout(() => {
      const answers = [
         "Yes",
         "No",
         "Maybe",
         "Ask again later",
         "Certainly",
         "I'm not sure"
      ];
      const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      answerDiv.textContent = randomAnswer;
      magicBall.classList.remove('shake');
   }, 1000); 
});
