var myCallback = function(data) {
 console.log('got data: '+data);
};
  
var usingItNow = function(callback) {
   callback('get it?');
   // Getting/Printing the data from array
};

usingItNow(myCallback)