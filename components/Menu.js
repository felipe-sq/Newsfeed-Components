// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu-open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
const menuHeader = document.querySelector('div.header');

function menuMaker(data) {
  // const menuArray = data;

  const menuDiv = document.createElement('div');
  const menuList = document.createElement('ul');

  menuDiv.appendChild(menuList);

  menuDiv.classList.add('menu');

  // Fixed the issue with the .forEach() method not adding the array
  // element by index. The code did not need 'data[e]', it just 
  // needed to know to add 'e' as the textContent.

  data.forEach(e => {
    const ulItem = document.createElement('li');
    ulItem.textContent = e;
    menuList.appendChild(ulItem);
    return ulItem
  });

  // for(i = 0; i < data.length; i++){
  //   const ulItem = document.createElement('li');
  //   ulItem.textContent = data[i];
  //   menuList.appendChild(ulItem);
  // }

  // Manually typed up multiple <li> elements to test code and make
  // sure that I was creating them properly in the .forEach and 
  // for loop

  // const ulItem1 = document.createElement('li');
  // ulItem1.textContent = data[0];
  // menuList.appendChild(ulItem1);
  // 
  // const ulItem2 = document.createElement('li');
  // ulItem2.textContent = data[0];
  // menuList.appendChild(ulItem2);


  const menuImg = document.querySelector('.menu-button');
  console.log(menuImg)

  menuImg.addEventListener('click', () => {
    menuDiv.classList.toggle('menu-open');
  })

  return menuDiv
}
// console.log(menuItems);
// console.log(menuMaker(menuItems));

const newsfeedMenu = menuMaker(menuItems);
menuHeader.appendChild(newsfeedMenu);