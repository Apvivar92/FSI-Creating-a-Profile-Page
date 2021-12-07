let content = document.querySelector('.js-generated.content');
let header = document.createElement('h1');
header.setAttribute('class', ' dog-name');
header.append('Rizzo');
content.append(header);

let divide = document.createElement('div');
divide.setAttribute('class', 'dog-content');

let image = document.createElement('img');
image.setAttribute('class', 'dog-image');
image.setAttribute('src', './assets/rizzo.jpg');
divide.append(image);

let divide1 = document.createElement('div');
divide1.setAttribute('class', 'dog-details');
divide.append(divide1);

let header1 = document.createElement('h3');
header1.append('Description');
divide1.append(header1);

let paragraph = document.createElement('p');
paragraph.append(
  'This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.'
);
divide1.append(paragraph);

let header2 = document.createElement('h3');
header2.append('Feeding times:');
divide1.append(header2);

let list = document.createElement('ul');
let list1 = document.createElement('li');
let list2 = document.createElement('li');
let list3 = document.createElement('li');

list1.append('9:00 am');
list2.append('12:00 pm');
list3.append('5:00 pm');

list.append(list1);
list.append(list2);
list.append(list3);
divide1.append(list);

content.append(divide);
