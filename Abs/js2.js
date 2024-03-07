// While
let weather=20;

while (weather >18) {
  console.log(`havo issiq`);
  break;
}

//
let student=14
while (student<16) {
  console.log(`This student have to attend to school lesson`)
  break;
}
//
let price=1000;
while (price>900) {
  console.log(`This will be the newest iphone`)
  break;
};

//do while
let grade=95;
do{
  console.log(`This gives a scholarship`)
  break;
} while (grade>86);
//
let temperature=36.6;
do {
  console.log(`this is a norm temperature`)
  break;
}while(temperature>=36.6 && temperature<36.8)
//

let speed=120;
do{
  console.log(`This can cause a charge`);
  break;
} while(speed>100);


//Arrays
let hobbylist= ["Book","movie","training","hiking"];
console.log(hobbylist.length);
console.log(hobbylist.push("cooking"));
console.log(hobbylist);
console.log(hobbylist.unshift("driving"));
console.log(hobbylist);
console.log(hobbylist.pop());
console.log(hobbylist);
console.log(hobbylist.shift());
console.log(hobbylist);
//
let studentlist= ["Ali","Burxon","Saodat","Zufar","Malika","Azam","Omina","Laziz","Baxtiyor"];
console.log(studentlist);
console.log(studentlist.splice(2,4));
console.log(studentlist);
console.log(studentlist.slice(2,5));
console.log(studentlist);

//Sort va concat metodlari
let carlist=["chevrolet","bmv","audi","maseratti","bugatti","ford","mercedes","kia","hyundai"]
let airplanelist=["boeing","tu","rollce-royse","lufthanca","an"]
console.log(carlist.sort());
console.log(airplanelist.concat(carlist).sort().join("#"));
let result = airplanelist.concat(carlist).sort().join("#");
console.log(result.length)
