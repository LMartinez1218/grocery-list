// Goals using only Javascript
// - Change the Text of My Title to "My Grocery List"
// - Change the font color of the p tag to red
// - Remove the bullets on the ul's

let listItem = document.getElementsByTagName("li")
for (item of listItem) {
    item.style.color = "green";
    }


let para = document.getElementById("para");
    para.style.color = "purple";
console.log("para", para);

let groceryList = document.getElementById("list");
groceryList.style.listStyleType = "none";



