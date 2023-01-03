//Bai 14: TOAN TU
/*
    1. Toan tu so hoc - Arithmetic
    2. Toan tu gan - Assignment
    3. Toan tu so sanh - Comparison
    4. Toan tu logic - Logical
*/

//TOAN TU SO HOC: + , -, *, **, /, %, ++, --
var a = 6;
var b = 3;

var c = a + b;
console.log(c);

var luythua = a ** b; //6^3
console.log(luythua)

var chialaydu = a % b; //so du
console.log(chialaydu);

a--;//5 
a--;//4
console.log(a);


//TOAN TU GAN: =, +=, -=, *=, /=, **=
// x = x + y or x += y
var fullName ='Ho Thi Hong Thuy';// Gan gia tri 'Ho Thi Hong Thuy' cho bien fullName

var a = 1; 
var a = a+2;//(a += 2) Gan VP a+2 cho VT a 
console.log(a);//3

//Toán tử ++ và --
var number = 1;
//variable++: tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
console.log(number++); // 1 :trước khi tăng
console.log(number); // 2

console.log(number++); // 2
console.log(number); // 3
//++variable:tăng giá trị của biến lên 1 và trả về giá trị sau khi tăng.
var number1 = 1;
console.log(++number1); // 2 
console.log(number1); // 2

console.log(++number1); // 3
console.log(number1); // 3

// "++a, --a" sẽ tăng/giảm a đi 1 đơn vị, sau đó sẽ trả về giá trị của a.
// "a++, a--" sẽ trả về giá trị của a, sau đó mới tăng/giảm a 1 đơn vị
var a = 1;
var b = ++a * a--;// 2*2 
// ++a sẽ tăng a lên 1 trước và trả về giá trị, nên lúc này a = 2.
// Lúc này, b = 2 * a--;
// TIếp đó, a-- sẽ trả về giá trị của a là a = 2, sau đó mới giảm đi 1 đơn vị.
// Lúc này, b = 2 * 2 = 4 và a = 1.

//Toán tử nối chuỗi
var firstName ='Thuy'
var lastName='Ho'
console.log(firstName + ' ' +lastName)

var name ='Thanh'
name += 'Ho'
console.log(name);

//TOAN TU SO SANH: ==, !=, >, <, >=, <=
var a = 1;
var b = 2;
if (a==b){}
 /* 
 *  ==:so sánh trừu tượng (abstract equality): chuyển đổi kiểu dữ liệu trước khi só sánh
 *  ===so sánh cân bằng nghiêm ngặt (strict equality):  hai giá trị không cùng loại, khi so sánh trả về false
 */
console.log(3 == "3"); // true (chuỗi "3" được chuyển thành số 3 trước khi việc so sánh được thực hiện)
console.log(3 === "3"); // false.(2 kiểu dữ liệu khác nhau nên trả về sai)

/**
 * ==: so sanh value
 * ===: so sanh value + datatype
 * !==
 */
var a =1;
var b ='1';
console.log(a==b)//true
console.log(a===b);//false


//TOAN TU LOGIC: 
/**
 * &&: and (1 vế bằng false thì kết quả trả về sẽ là false.)
 * ||: or (1 vế bằng true thì kết quả trả về sẽ là true.)
 * !: not
 */
var a= 1;
var b= 2;
var c= 3;

if (a > 0 && !(b < 0)){
    console.log('DIEU KIEN DUNG')
}
