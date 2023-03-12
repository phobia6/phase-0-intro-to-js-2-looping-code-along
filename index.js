/* for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  } */

/*  const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      debugger;
    }
  
    return gifts;
  }
  
  wrapGifts(gifts); */

  const names = ["Guadalupe", "Ollie", "Aki"];
  //const event = ["birthday", "surprise", "gift"]
  let newArray = [];
  //function writeCards(names,event) {
    function writeCards(names) {
      for (let i = 0; i < names.length; i++) {
        newArray[i] = [i];
        //newArray[i] = `Thank you, ${names[i]}, for the wonderful ${event[i]} gift!`
        newArray[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`
          debugger;
      };
    return newArray;
  };
  //writeCards(names, event);
  writeCards(names);
  console.log(newArray); 



  let count = 10;
  function countDown(count) {
      while (count > -1) {
          console.log(count--);
          debugger;
      };
  }
  countDown(10);