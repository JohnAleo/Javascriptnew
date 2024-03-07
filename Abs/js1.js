
function evalNumber(a,b){
  if(`function is add`){
  console.log(a+b);
  }
  else if(`function is subtract`){
  console.log(a-b);
  }
  else if(`funstion is multiplay`){
    console.log(a*b);
  }
  else if(`function is divide`){
    console.log(a/b);
  }
  else{
    console.log(`invalid operation`)
  }
}
evalNumber(a=8,b=5)
//
function isEvenOrOdd(){
let num=11;
if (num%2==0){
  console.log(`number is even`)
}
else{
  console.log(`Number is Odd`)
}
}
isEvenOrOdd()
//

function findTriangleType(side1,side2,side3){

if (side1==side2 && side2==side3){
console.log(`Equaterial triangle`)
}
else if (side1==side2 ||side2==side3){
  console.log(`Isosceles triangle`)
}
else{
  console.log(`Scalene triangle`)
}
}
findTriangleType(side1=10,side2=10,side3=10)
//
function findGrade(grade){

if(grade==100 || grade>90){
  console.log(`A+`)
}
else if(grade=90 && grade>80){
  console.log(`A`)
}
else if(grade<=80 && grade>70){
  console.log(`B`)
}
else if(grade<=70 && grade>60){
  console.log(`c`)
}
else if(grade<=60 && grade>50){
  console.log(`D`)
}
else if(grade<=50 && grade>40){
  console.log(`E`)
}
else if(grade<=40 && grade>0){
  console.log(`Student has failed`)
}
else{
  console.log(`Invalid marks`)
}

}
findGrade(grade=50)
//
function checkLeapYear(year){
if(year%2==0 && year!=1624,1224,824,424,24){
  console.log(`Leap year`)
}
else if(year%2==0 || year==1624 || year==1224 ||year==824 || year==424 || year||24){
  console.log(`Leap year`)
}
else{
console.log(`Not a leap Year`)
}
}
checkLeapYear(year=2024)

//
let weather = "cold";

 switch (weather) {
   case "hot":
     console.log(`yupqaroq kiyinib oling!`);
     break;
   case "cold":
     console.log(`Qalinroq kiyinib oling`);
     break;
   default:
     console.log(`Bunday ma'lumot mavjud emas`);
 }

 //
 let car ="Metanli";
 switch (car){
  case "petrol":
    console.log(`Petrol is available and safe`)
    break;
  case "Metanli":
    console.log(`Metan is cheap but not safe and available`)
    break;
  default:
    console.log(`Har bir yoqilg'ining plus va minus tomonlari mavjud`)
 }

 //
 let scholarship="MIT";
 switch (scholarship){
  case "Oxford":
    console.log(`50 percent tuition fee plus free dormitory`)
    break;
  case "MIT":
    console.log(`70 percent scholarship plus paid internship`)
    break;
  case "Harvard":
    console.log(`60 percent discount in tuition fee and three free tour to other regional university`)
    break;
  default:
    console.log(`other univerities doesn't have any discounts`)
 }
//
 let bolalar="A+ grade"
switch (bolalar){
  case "A+ grade":
    console.log(`Prezident maktabida o'qiydi`)
    break;
  case "A grade" :
    console.log(`Ixtisoslashtirilgan maktabda o'qiydi`)
    break;
  default:
    console.log(`qolgan darajali o'quvchilar davlat maktabida o'qiydi`)
}
//
let ecars="tesla"
switch (ecars){
  case "BYD":
    console.log(`Made in China`)
    break;
  case "Lucid motors":
    console.log(`Made in USA`)
    break;
  case "tesla":
    console.log(`Made in USA`)
    break;
  default:
    console.log(`Anyway USA and China are faourite country in car manufacturing`)
}
//
let book="novel"
switch (book) {
  case "Autobiography":
    console.log(`Can't me hurt`)
    break;
  case "novel":
    console.log(`The godfather`)
    break;
  case 'biography':
    console.log(`Steve Jobs`)
    break;
  default:
    console.log(`poem`)
}
//
let soda="fanta"
switch (soda) {
  case "cola":
    console.log(`Black fizzy drink`)
    break;
  case "fanta":
    console.log(`Orange fizzy drink`)
    break;
  case "sprite":
    console.log(`transparent fizzy drink`)
    break;
  default:
    console.log(`multicolor sodas`)
}
//
let clubs="Barcelona"
switch(clubs) {
  case "Real Madrid":
    console.log(`Madrid`)
    break;
  case "Barcelona":
    console.log(`Cataglonia`)
    break;
  default:
    console.log(`Primer league`)

}
let laptops="hp"
switch(laptops) {
  case "Macbook":
    console.log(`Apple product`)
    break;
  case "hp":
    console.log(`hp product`)
    break;
  default:
    console.log(`Other companies`)
}
//
let students="graduate"
switch(students) {
  case "Undergraduate":
    console.log(`student of bachelors program`)
    break;
  case ("School student"):
    console.log(`a student who go to school`)
    break;
  case ("graduate"):
    console.log(`a student who finished the bachelors program and continueing education in the next phase`)
    break;
  default:
    console.log(`other student`)
}


function step() {
  console.log(`one step`);
}
for (let i = 5; i < 10; i++) {
  step();
}
//
{
for(let i=0; i<10; i++) {
  for(let k=i; k<10; k++){
    console.log(i,k);
  }
}
}
