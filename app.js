//getting a li element
const listItem = document.querySelectorAll('li');
//returns a node list

listItem.forEach(item => {
    let liElement = item.outerText;
    
});

function onclick() {
    alert(liElement + " was clicked.");
}
