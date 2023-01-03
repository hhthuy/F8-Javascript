//Bai 7 - Bien
/**
 declare JavaScript variables with var,let, orconst
 always declare variables -> const (2015)
 the value of the variable can change -> let (2015)
 */
const price1 = 5;//no change
const price2 = 6;//no change
let car;//undefined
let carName = "Volvo";
let total = price1 + price2;//can change

console.log('-----Mot so ham built-in-----')
//Bai 11- Mot so ham built-in
/*
    1. Alert
    2. Console
    3. Confirm
    4. Prompt
    5. Set timeout
    6. Set interval
*/

var fullName ='Ho Thi Hong Thuy'
console.log('Dong log')
console.log(19434551)
console.log(fullName)
console.warn('Canh bao')
console.error('Loi')

confirm('Message: Xac nhan! Cancel-OK')
prompt('Hop thoai nhap gia tri')
//In ra 1 lan
setTimeout(function() {
    alert('Thong bao sau 1000ms=1s duoc chay 1 lan')
},1000);
//In ra lien tuc
setInterval(function() { 
    //alert('Thong bao sau 1000ms=1s duoc chay dinh ky (1s/1lan)')
},1000)