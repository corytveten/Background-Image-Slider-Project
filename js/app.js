const buttons = document.querySelectorAll('.btn');
const imgDiv = document.querySelector('.img-container')

counter = 0
const cars = [
  'contBcg-0.jpeg',
  'contBcg-1.jpeg',
  'contBcg-2.jpeg',
  'contBcg-3.jpeg',
  'contBcg-4.jpeg',
]

let x = document.createElement('IMG');


 buttons.forEach(function(button) {
   button.addEventListener("click", function() {
     if (button.classList.contains('btn-left')) {
       console.log(counter);
       imgDiv.style.background = `url("./img/${cars[counter]}")`;
       counter --;
       if(counter < 0){
        counter = cars.length -1
      }
     } else {
      console.log(counter);
      imgDiv.style.background = `url("./img/${cars[counter]}")`;
      //counter ++;
      if (counter < cars.length - 1) {
        counter ++;
      } else {
        counter = 0;
      }
     }
   })
 })

