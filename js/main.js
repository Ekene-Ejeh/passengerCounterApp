// variable used
let count = 0;
let currentCount = document.getElementById("count-el");
let saveCount = document.getElementById("save-el");

// increment count when the increment button is clicked
function increment() {
   Count = count++;
   currentCount.innerText = Count + 1;
}

// save count and start a new when save button is clicked
function save() {
   console.log(Count + 1);
   let countResult = `${count}, `;
   saveCount.textContent += `${countResult}`;
   currentCount.textContent = 0;
   count = 0;
}
