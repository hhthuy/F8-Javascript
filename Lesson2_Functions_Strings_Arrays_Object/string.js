console.log('----------Kiểu dữ liệu chuỗi (string)----------')

/**
Kiểu dữ liệu chuỗi (string)

1. Tao chuoi
    - Cac cach tao chuoi (2 cach)
    - Nen dung cach nao? Ly do? -> C1
    - Kiem tra data type
2. Mo so case su dung backslash (\)
3. Xem do dai chuoi (length)
4. Chu y do dai khi viet code: " "+ " "
5. Template string ES6
 */
//Tao chuoi
var fullName ='Ho \"Thi Hong\'  Thuy';//C1
var firstName ="Thuy";
var lastName = new String('Ho');//C2


console.log(fullName)
console.log(fullName.length)
console.log('Toi la: ' + firstName+ '' + lastName)//old 
console.log(`Toi la: ${firstName} ${lastName}`)//Template string ES6

console.log('----------Làm việc với chuỗi----------')
/**
Làm việc với chuỗi (Javascript string methods)
    1. Lenghth
    2. Find index: tim vi tri dau tien cua ky tu trong chuoi
    3. Cut string
    4. Replace
    5. Convert to Upper case
    6. Convert to lower case\
    7. Trim: loai bo khoang trang thua
    8. Split: dua vao diem chung cat ra
    9. Get a chracter by index
 */

var myString ='Hoc F8 JS tai F8!     '
console.log(myString.length)//17
console.log(myString.indexOf('F8'))//4
console.log(myString.indexOf('F8', 5))//vi tri bat dau tim kiem bat dau tai vi thu 5 (--->JS tai F8 )
console.log(myString.lastIndexOf('JS'))//4:  JS tai F8 <-----
console.log(myString.search('JS'))//4 (indexof: co vi tri bat dau tim kiem, search: co tim kiem theo bieu thuc chinh quy)

console.log(myString.slice(4,6))//F8 (bat dau cat start, end)
console.log(myString.slice(6))//JS tai F8 (trai->phai: bat dau cat tai vi tri so 6)
console.log(myString.slice(-3,-1)) //F8 (phai -> trai (0,-1,-2)

console.log(myString.replace('F8','W3school'))//C1: old
console.log(myString.replace(/F8/g, 'W3school'))//ghi de tat ca F8 thanh W3chool

console.log(myString.toLocaleUpperCase())
console.log(myString.toLocaleLowerCase())

console.log(myString.length)//22
console.log(myString.trim().length)//17

var language ='Javscript, PHP, ReactJS';
console.log(language.split(', '))//(3) ['Javscript', ' PHP', ' ReactJS']
console.log(language.split(''))//(23) ['J', 'a', 'v', 's', 'c', 'r', 'i', 'p', 't', ',', ' ', 'P', 'H', 'P', ',', ' ', 'R', 'e', 'a', 'c', 't', 'J', 'S']

console.log(myString.charAt(10))//t 
