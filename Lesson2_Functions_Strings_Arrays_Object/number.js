console.log('----------Kiểu dữ liệu số (number)----------')
/**
Kiểu số - Number
Trong Javascript có 2 loại số:
    1. Các số (Javascript) được lưu trữ dưới dạng 64 bit IEEE-754 (số phẩy động). 
   
    Đối tượng Number
    - Number.isFinite(): gia tri số hữu hạn? -> boolean
    - Number.isInteger(): gia tri son nguyen? -> boolean
    - Number.parseFloat(): Chuoi -> Dấu phẩy động
    - Number.parseInt(): Chuoi -> So nguyen
    - Number.prototype.toFixed() -> làm tròn số với độ dài phần thập phân -> đổi thành dạng chuỗi
     Number.prototype.toString() -> So -> Chuoi
    2. Số BigInt là loại số biểu thị số nguyên có độ dài tùy ý.
    */

var million = 1000000;
var billion =2e9;

console.log('Đối tượng Number')

var finite = Number.isFinite(2/0);//false
var finite1 = Number.isFinite(0/0);//false
var finite2 = Number.isFinite(20/5); //true
console.log(finite, finite1, finite2)

var interger1 = Number.isInteger(9999999)//true
var interger2 = Number.isInteger(0.5)//false
console.log(interger1, interger2)

var pFloat = Number.parseFloat('10')//10
var pFloat1 = Number.parseFloat('10.00')//10.00
var pFloat2 = Number.parseFloat('10.05')//10.05
var pFloat3 = Number.parseFloat('20,05')//20
var pFloat4 = Number.parseFloat('40 50 60')//40
var pFloat5 = Number.parseFloat('21 years olds')//21
console.log(pFloat, pFloat1, pFloat2,pFloat3,pFloat4,pFloat5)//=parseInt

var numObject = 1234.56789;
console.log(numObject.toFixed())//1235 (~1234.5)
console.log(numObject.toFixed(3))//1234.568 (vi tri thu 3 sau , cong 1)

var resultToString = (11).toString(); // '11'
console.log(resultToString)

/**
Số và làm việc với số
1. Tao gia tri Number
    - Cac cach tao
    - Dung cach nao? Tai sao? --> C2 
    - Kime tra data type
2. Lam viec voi Number
    - To String
    - To Fixed
 */
//C1:
var otherNumber = new Number(9);//Kieu Object
//C2
var age = 21;
var PI = 3.14;
console.log(age.toString())//string (den)
console.log(age)//number (xenh)

console.log(PI.toFixed())//3 (lam tron sau .)
//console.log(typeof age)


// trong JavaScript thì kiểu của NaN cũng là number
function isNumber(value) {
    if (typeof value === 'number' && !isNaN(value)) {
        return true;//kieu so: isNumber(NaN)
    }
    else {
        return false;
    }
}