// Array: splice,slice,push,shift,unshift,sort,concat,jion metodlari va do/while do holatlari yordamida maslalar

// 1-push (Berilgan array ma'lumotlariga oxiridan berilgan miqdorda ma'lumot qo'shadi)
//let cars=["audi","toyota","chevrolet"];
//console.log(cars);
//console.log(cars.push("mercedes"));
//console.log(cars);
//
//let workers=["programmer","teacher","plumber"];
//console.log(workers);
//console.log(workers.push("electrician","mechanic","psychiatric","lawyer"));
//console.log(workers);
//console.log(workers.length);
//console.log(workers.join("@"));
//result=workers.join("@");
//console.log(result.length)
//
// 2-unshift (berilgan ma'lumotlarga boshidan boshlab berilgan miqdorda ma'lumot qo'shadi)
//let methods=["push","slice","splice"];
//console.log(methods.unshift("join","length"));
//console.log(methods.length);
//let parts=["ram","processor","keyboard","display"];
//console.log(parts.unshift("mouse","camera","microphone"));
//console.log(parts);
//console.log(methods.concat(parts));
//console.log(methods.concat(parts).join("&"));
//let result=methods.concat(parts).join("&");
//console.log(result.length);

// 3-pop (berilgan ma'lumotdan oxiridagi ma'lumotni yoki kiritilgan miqdordagi ma'lu,otni olib tashlaydi)
//let presidents=["Xi","Biden","Putin","Aliyev","Toqaev","Pashinyan","Assad"];
//let players=["Ronaldo","Messi","Rodrigo","Modrich","Pirlo","Zidane"]
//console.log(presidents);
//console.log(presidents.pop());
//console.log(presidents.pop("Toqaev","Pashinyan","Assad"));
//console.log(presidents.concat(players).join("#"));
//console.log(presidents.concat(players).sort());
//let result=presidents.concat(players).join("#");
//console.log(result.length)

// 4- shift (berilgan Arrayning boshidan ma'lumotni olib tashlaydi)
//let teamA=["Jobir","Farrux","Anvar","Salim","Zoxid"];
//let teamB=["Rajab","Aziz","Jahongir","Temur","Vali","Kamron"];
//console.log(teamA.shift());
//console.log(teamA);
//console.log(teamB.shift());
//console.log(teamB);
//console.log(teamA.concat(teamB).sort());
//let group=(teamA.concat(teamB).sort());
//console.log(group.shift());
//console.log(group)

//5-slice (berilgan arraydan ko'rsatilgan indexdan berilgan miqdor qadar ma'lumotlarni oladi va ro'yxatni yana o'zini qoldiradi)
//let cars=["porsche","pagani","mercedes","honda","mazda","chevrolet","ford","hyundai"];
//console.log(cars);
//console.log(cars.splice(2,4));
//console.log(cars);
//let sportcars=["ferrari","lamborghini","maseratti","bugatti","bmw"];
//console.log(cars.concat(sportcars));
//console.log(cars.concat(sportcars).slice(2.5));
//let result=cars.concat(sportcars).slice(2.5);
//console.log(result.sort());
//console.log(result.join("!"));
//console.log(result.join("@").length)

// 6-splice(berilgan arraydan ko'rsatilgan indexdan boshlab berilgan miqdor ma'lumotni ro'yxatdan sug'urib oladi va qolgan ma'lumotlarni beradi)
let instruments=["guitar","piano","violin","do'mbira","doira","nay","nog'ora","bass gitara"];
let genres=["jazz","pop","rock","rap","estradaa","hip-hop"];
console.log(instruments);
console.log(instruments.splice(2,4));
console.log(instruments);
console.log(instruments.concat(genres));
console.log(instruments.concat(genres).sort());
console.log(instruments);
console.log(instruments.push("tor"));
console.log(instruments);
