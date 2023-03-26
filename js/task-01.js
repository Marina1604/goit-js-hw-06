const listOfEl = document.querySelectorAll('.item');

const numberOfCategories = listOfEl.length;
console.log(`Number of categories: ${numberOfCategories}`);



const categorItem = listOfEl.forEach((item) => {
    console.log(`Category:`, item.firstElementChild.textContent);
    console.log(`Elements:`, item.querySelectorAll('li').length);
}); 

