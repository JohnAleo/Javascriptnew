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
let presidents=["Xi","Biden","Putin","Aliyev","Toqaev","Pashinyan","Assad"];
console.log(presidents);
console.log(presidents.pop());
console.log(presidents.pop("Toqaev","Pashinyan","Assad"));
