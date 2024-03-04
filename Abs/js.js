// Ikkita berilgan  sonni 1)Kattasini kichigiga bo'lgandagi butun qismini 2)Ikkalasining yig'indisini kichigiga bo'lganda kasr qismini ikki xonasigacha ko'rsatish 3) 2 shart bajarilganda chiqqan javobni yuqoriga qarab yaxlitlash
var a=14;
var b=20;
var d=(b/a);
console.log(parseInt(d));
var f=((a+b)/a);
console.log(parseFloat(f.toFixed(2)));
console.log(Math.ceil(f));

// Berilgan sonlardan birinchisdan kvadrat ildiz ostidan va ikkinchisidan kubinchi ildiz ostidan chiqqan sonlar yig'indisini hisoblovchi masala
var c=16;
var g=64;
var e=(Math.sqrt(c));
var h=(Math.cbrt(g));
var i=e+h;
console.log(i);

// Ikkita berilgan sonlarni kvadrat ildiz ostida ularning yig'indisi va ko'paytmasining bir biriga ko'paytmasidan chiqqan natijani hisoblovchi masala
var a=9;
var b=16;
var d=Math.sqrt((a+b)*(a*b));
console.log(d);

// Berilgan ikkita sonlardan birinchisining kvadratini kubinchi ildizdan chiqqan qiymatiga ikkinchisining kvadrat ildiz ostidan chiqqan qiymatini qo'shib chiqqan yig'indini ularning kattasidan kichigini ayirgandagi chiqqan natijaga bo'lganda hosil bo'lgan sonni yaxlitlash
var a=8;
var b=25;
console.log(parseFloat(Math.round((Math.cbrt(Math.pow(a,2))+Math.sqrt(b))/(b-a))));

// Berilgan ikkita sondan katttasini kichigiga bo'lganda chiqqan sonni pastga yaxlitlab hisoblovchi masala
var a=15;
var b=32;
d=32/15;
console.log(Math.floor(d))

// Ikkita son berilgan va berilgan sonlarni 10 dan ayirmasini modulga olib va uning kvadrat ildizini hisoblovchi masala
var a=35;
var b=26;
var d=10;
var a1=d-a;
var b1=d-b;
console.log(Math.sqrt(Math.abs(a1))+Math.sqrt(Math.abs(b1)));
// Ikkita berilgan sonlarni kvadrat ildizlari natijasini yaxlitlangani yig'indisini hisoblovchi masala
var a=26;
var b=34;
var a1=Math.sqrt(a);
var b1=Math.sqrt(b);
console.log(Math.round(a1)+Math.round(b1))

// Ikkita berilgan sonlarni 6 ga bo'lingan va ularni tepaga yaxlitlanganda natijasini ko'rsatuvchi masala
var a=15;
var b=22;
var a1=a/6;
var b1=b/6;
console.log(Math.floor(a1));
console.log(Math.floor(b1));
// Berilgan sonlar yig'indisidan kvadrat ildiz olingandagi natijani beruvchi masala
var a=100;
var b=25;
var c=a+b;
console.log(Math.cbrt(c));
// Berilgan ikki sonni bir biriga bo'linganda kasr qismini 3 xonagacha oluvchi masala
var a=39;
var b=20;
var c=a/b;
console.log(c.toFixed(3));
// Berilgan ikki sonning ayirmasini ko'rsatuvchi masala
var a=21;
var b=31;
var c=a-b;
console.log(c);
// Berilgan ikkita sonni mos ravishda kub va kvadrat ildizlarini mos ravishda kvadrat va kubinchi darajaga ko'tarib ularni yig'indisini hisoblovchi masala
var a=24;
var b=22;
var a1=Math.cbrt(a);
var b1=Math.sqrt(b);
var a2=Math.pow(a1,2);
var b2=Math.pow(b1,3);
console.log(Math.ceil(a2)+Math.floor(b2));
// Berilgan ikkita sonlarni kattasini kichigiga bo'lganda bo'linmani pastga qarab yaxlitlab hisoblovchi masala
var b=4;
var c=3;
var d=b/c;
var d1=Math.ceil(d);
console.log(Math.floor(d))
// Berilgan sonlar to'plamidan max va min qiymatni chiqaruvchi masala
var a=console.log(Math.max(1,2,3,4,5,6,7,8,9,10));
var b=console.log(Math.min(1,2,3,4,5,6,7,8,9,10));
console.log(typeof(a))
console.log(Math.max(1,2,3,4,5,6,7,8,9,10));
console.log(Math.min(1,2,3,4,5,6,7,8,9,10));
console.log(a+b)
console.log(a)
// Random holatda 1 dan 10 gacha va 1 dan 100 gacha sonlarni chiqarish
var a=console.log(parseInt(Math.random()*10));
var b=console.log(parseInt(Math.random()*100));
//



function add(){
  let a=numb1;
  let b=numb2;
    console.log(a+b)
  }