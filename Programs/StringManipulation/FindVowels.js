function findVowels(str) {
   str = str.toLowerCase();
  
   var vowels = '';
   var length = str.length;

   //Find out Vowels only
   for(var i=0;i<str.length;i++) {
       var chardata = str.charAt(i);
       
       switch(chardata) {  
         case 'a' :  vowels = vowels+chardata; break;
         case 'e' :  vowels = vowels+chardata; break;
         case 'i' :  vowels = vowels+chardata; break;
         case 'o' :  vowels = vowels+chardata; break;
         case 'u' :  vowels = vowels+chardata;
       }
   }
   return vowels;
}

var str = "A recursive function is a function that calls itself during its execution. This enables the function to repeat itself several times";
console.log("Vowels - ", findVowels(str));


