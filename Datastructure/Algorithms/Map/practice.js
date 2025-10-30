const grouping = (arr, size) => {
    let hashMap = new Map();

    let ensure = (u) => {
        if(!hashMap.has(u)) {
            hashMap.set(u, new Set());
        }
    }

    for(const [type, u, v] of arr) {
        if(type == "CONNECT") {
            ensure(u);
            ensure(v);

            hashMap.get(u).add(v);
            hashMap.get(v).add(u);
        } else  if(type == "DISCONNECT") {
            hashMap.get(u).delete(v);
            hashMap.get(v).delete(u);
        }
    }

    let more = [];
    let less = [];

    for(const [u, v] of hashMap.entries()) {
        if(v.size < size) {
            less.push(u)
        } else if(v.size >= size) {
            more.push(u)
        }
    }

    return [less, more];
}

const events = [
  ["CONNECT","Alice","Bob"],
  ["DISCONNECT","Bob","Alice"],
  ["CONNECT","Alice","Charlie"],
  ["CONNECT","Dennis","Bob"],
  ["CONNECT","Pam","Dennis"],
  ["DISCONNECT","Pam","Dennis"],
  ["CONNECT","Pam","Dennis"],
  ["CONNECT","Edward","Bob"],
  ["CONNECT","Dennis","Charlie"],
  ["CONNECT","Alice","Nicole"],
  ["CONNECT","Pam","Edward"],
  ["DISCONNECT","Dennis","Charlie"],
  ["CONNECT","Dennis","Edward"],
  ["CONNECT","Charlie","Bob"]
];

console.log("N=3:", grouping(events, 3)); 
// Expected groups (names may be sorted differently but memberships should match):
// [ ["Alice","Charlie","Pam","Nicole"], ["Bob","Dennis","Edward"] ]

console.log("N=1:", grouping(events, 1)); 
// [ [], ["Alice","Bob","Charlie","Dennis","Edward","Nicole","Pam"] ]

console.log("N=10:", grouping(events, 10)); 
// [ ["Alice","Bob","Charlie","Dennis","Edward","Nicole","Pam"], [] ]
