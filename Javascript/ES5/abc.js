
const x = [{ "id": 1 },{ "id": 3 },{ "id": 5 },{"id": 6 }];
const y = [{ "id": 2 },{ "id": 4 },{ "id": 6 },{"id": 1 }];

var arr = x.concat(y);


function mergeArrays(x, y){
  const res = arr.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
  console.log(res)
}

mergeArrays(x, y)


var things = new Object();

things.thing = new Array();

things.thing.push({place:"here",name:"stuff"});
things.thing.push({place:"there",name:"morestuff"});
things.thing.push({place:"there",name:"morestuff"});

// assign things.thing to myData for brevity
var myData = things.thing;

things.thing = Array.from(new Set(myData.map(JSON.stringify))).map(JSON.parse);

console.log(things.thing)