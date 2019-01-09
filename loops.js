function makeArray(){
  const array = [];
  const t = 10;

for (let i=0; i<t; i++){
  array.push("I am a strange loop");
}

return [array, t];
}

function forLoop(array){
  
  
      const [array, t] = makeArray();
      const strangeArray = forLoop(array);
      const testArray = strangeArray.slice(array.length);

      let first = "I am 1 strange loop.";
      let rest = "I am 24 strange loops.";
      
        
      }
