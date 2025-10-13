/*
You are running a classroom and suspect that some of your students are passing around the answer to a multiple-choice question disguised as a random note.

Your task is to write a function that, given a list of words and a note, finds and returns the word in the list that is scrambled inside the note, if any exists. If none exist, it returns the result "-" as a string. There will be at most one matching word. The letters don't need to be in order or next to each other. The letters cannot be reused.

---



// 
// index = i;
// return words[index];

{
  b: 2,
  a: 1,
  y: 1
}

Example:  
words = ["baby", "referee", "cat", "dada", "dog", "bird", "ax", "baz"]
note1 = "ctay"
find(words, note1) => "cat"   (the letters do not have to be in order)  
  
note2 = "bcanihjsrrrferet"
find(words, note2) => "cat"   (the letters do not have to be together)  
  
note3 = "tbaykkjlga" 
find(words, note3) => "-"     (the letters cannot be reused)  
  
note4 = "bbbblkkjbaby"
find(words, note4) => "baby"    
  
note5 = "dad"
find(words, note5) => "-"    
  
note6 = "breadmaking"
find(words, note6) => "bird"    

note7 = "dadaa"
find(words, note7) => "dada"    

All Test Cases:
find(words, note1) -> "cat"
find(words, note2) -> "cat"
find(words, note3) -> "-"
find(words, note4) -> "baby"
find(words, note5) -> "-"
find(words, note6) -> "bird"
find(words, note7) -> "dada"
  
Complexity analysis variables:  
  
W = number of words in `words`  
S = maximal length of each word or of the note  
*/
"use strict";

const words = ["baby", "referee", "cat", "dada", "dog", "bird", "ax", "baz"];
const note1 = "ctay";
const note2 = "bcanihjsrrrferet";
const note3 = "tbaykkjlga";
const note4 = "bbbblkkjbaby";
const note5 = "dad";
const note6 = "breadmaking";
const note7 = "dadaa";

// { baby : { b: 2, a: 1, y: 1}
// }
// {
//   b: 2,
//   a: 1,
//   y: 1
// }

const classRoom = (word, note) => {
   let result = "";
   let hashMap = new Map();
   let obj = {};
   for(let i = 0; i < word.length; i++) {
     let eachWord = word[i].split("");
     
     eachWord.filter((e) => {
       obj[e] = ( obj[e] || 0 ) + 1;
     });
     
     if(!hashMap.has(word[i])) {
       hashMap.set(word[i], obj);
       obj = {};
     }
   }
   
   let splitNotes = note.split("");
   
  //  console.log("First:", hashMap, splitNotes);
   
   // Calculation -
   for(let i = 0; i < splitNotes.length; i++) {
     let eachNoteChar = splitNotes[i];
     
     for(let [word, neighbor] of hashMap.entries()) {
       if(neighbor[eachNoteChar] && neighbor[eachNoteChar] > 0) {
         neighbor[eachNoteChar]--;
       }
     }
   }
   
   // Result 
   
   for(let [word, neighbor] of hashMap.entries()) {
     let neighbors =  Object.values(neighbor);
     let neighborLen =  Object.values(neighbor).length;
     let count = 0;
     for(let n of neighbors) {
       if(n == 0) {
         count++;
       }
     }
    //  console.log("Count,neighborLen:", count, neighborLen, word);
     if(count == neighborLen) {
       result = word;
       break;
     }
   }
   
   
  //  console.log("After Operation:", hashMap, splitNotes);
  //  console.log("Result:", result);
   if(result == "") {
     result = "-"
   }
   return result;
}

console.log(classRoom(words, note1));
console.log(classRoom(words, note2));
console.log(classRoom(words, note3));
console.log(classRoom(words, note4));
console.log(classRoom(words, note5));
console.log(classRoom(words, note6));
console.log(classRoom(words, note7));

// find(words, note1) -> "cat"
// find(words, note2) -> "cat"
// find(words, note3) -> "-"
// find(words, note4) -> "baby"
// find(words, note5) -> "-"
// find(words, note6) -> "bird"
// find(words, note7) -> "dada"