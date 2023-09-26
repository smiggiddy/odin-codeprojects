const container = document.querySelector('.container');

const content = document.createElement('div');

content.classList.add('dynamic');
content.textContent = "This shit is added";
container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.textContent = 'Hey, I\'m red';
paragraph.style.color = 'red';
container.appendChild(paragraph);

const headerThree = document.createElement('h3');
headerThree.textContent = "Hey, I'm blue h3!";
headerThree.style.color = 'blue';
container.appendChild(headerThree);

const newDiv = document.createElement('div');
newDiv.style.borderColor = 'black';
newDiv.style.backgroundColor = 'pink';

const innerHeader = document.createElement('h1');
innerHeader.textContent = "I'm in a div!";
const paragraphTwo = document.createElement('p');
paragraphTwo.textContent = "Me too!!!";

newDiv.appendChild(innerHeader);
newDiv.appendChild(paragraphTwo);
container.appendChild(newDiv);

// the JavaScript file
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});