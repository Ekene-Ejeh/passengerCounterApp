// // // alert("Hello World");
// // let num = (document.getElementById("count-el").innerHTML = 20);

// let myCurrentAge = 32;
// console.log(myCurrentAge);

// let myAge = 32;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// function increment() {
//    console.log("Button was Clicked!");
// }

// let Lap1 = 34;
// let Lap2 = 33;
// let Lap3 = 36;

// function totalLapTime() {
//    let total = Lap1 + Lap2 + Lap3;
//    console.log(total);
// }
// totalLapTime();

// let lapsCompleted = 0;

// function incrementLap() {
//    // let increment = lapsCompleted + 1;
//    for (let index = 0; index <= 3; index++) {
//       const element = lapsCompleted + index;
//       console.log(element);
//    }
// }
// incrementLap();

// increment count when the increment button is clicked
let count = 0;
// let newCount;
let currentCount = document.getElementById("count-el");
let saveCount = document.getElementById("count-save");

function increment() {
   Count = count++;
   currentCount.innerHTML = Count + 1;
}

function save() {
   console.log(Count + 1);
   // saveCount.innerHTML = `We counted ${Count} People`;
}
