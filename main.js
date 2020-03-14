// document.querySelector('button').addEventListener('click', () =>{
//   const li = document.createElement('li');
//   const text = document.querySelector('input');
//   li.textContent = text.value;
//   document.querySelector('ul').appendChild(li);


  

for(let i = 1; i <= 30; i++){
  if(i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} Fizzbuzz`)
  } else if (i % 3 === 0) {
    console.log(`${i}Fizz`)
  } else if (i % 5 === 0) {
    console.log(`${i}Buzz`)
  } else {
    console.log(i)
  }
}