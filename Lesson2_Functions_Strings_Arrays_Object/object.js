console.log('-----Object-----')

var myInfo = {
    name:'Thuy',
    'full-name': 'Ho Thi Hong Thuy',
    age: 21,
    address:'Duong Quang Ham, Go Vap, TPHCM',
    getName: function(){
        return this.name;//this=myInfo
    }
};  

//them key-value moi 
myInfo.email = 'hohongthuy001@gmail.com';
myInfo['school-name'] = 'IUH';
console.log(myInfo)

//Lay key
console.log(myInfo.name);//c1
console.log(myInfo['email']);//c2

//Lay chuoi tu Object
var myKey = 'address'
console.log(myInfo[myKey])//'Duong Quang Ham, Go Vap, TPHCM'

//Xoa key-value trong Objct
delete myInfo.age;
console.log(myInfo)

//Lay fuction tu Object
console.log(myInfo.getName())

/**
Object constructor
**/
function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Thuy', 'Ho','Avatar');
var user = new User('Thanh', 'Ho','Avatar');

author.title = 'F8';
user.comment ='Ok'

console.log(author)
console.log(author.getName())
console.log(user)

/**
Object prototype
    1. Prototype la gi?
        - Prototype là một object trong JS (goi prototype object (đối tượng prototype)) -> thực hiện mô hình OOP của Javascript
        - Kế thừa các tính năng từ một object khác
        - Tất cả các object trong javascript đều có một prototype
        - Các object này kế thừa các thuộc tính (properties) , (methods) từ prototype của mình
    2. Su dung khi nao?
**/

//Them thuoc tinh ben ngoai tao (function User)
User.prototype.className='F8-Javascript';
User.prototype.getClassName = function(){
    return this.className;//this = author
}
console.log(user.className)//F8-Javascript //thuoc tinh className
console.log(author.className)//F8-Javascript
console.log(author.getClassName())//F8-Javascript


/**
 * BT
 Tạo một object constructor Student gồm: firstName, lastName. 
 Sau đó, định nghĩa thêm phương thức là getFullName, phương thức này sẽ trả về tên đầy đủ của sinh viên.
 */
function Student(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName
}

Student.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

/**
 * Đối tượng Date
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */
var date = new Date()
console.log(date)//Tue Nov 01 2022 21:22:09 GMT+0700 (Indochina Time)

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
console.log(`${day}/${month}/${year}`);

//BT: tạo hàm getNextYear, hàm này sẽ trả về năm kế tiếp
function getNextYear() {
    var date = new Date();
    return date.getFullYear() + 1;
}

console.log(getNextYear());

console.log('Math object object')
/**
 * Math object object
    1. Math.PI
    2. Math.round(): lam tron so
    3. Math.abs(): gia tri tueyt doi
    4. Math.ceil(): lam tron tren
    5. Math.floor(): lam tron duoi
    6. Math.random(): tra ve so thap phan ngau nhien < 1
    7. Math.min()
    8. Max.max()
 */

console.log(Math.PI);//3.141592653589793
console.log(Math.round(1.6))//2
console.log(Math.abs(-4))//4
console.log(Math.ceil(4.3))//5
console.log(Math.floor(4.999))//4
console.log(Math.random())//0.774314565755106
console.log(Math.min(5,10,1,-5,20))//5
console.log(Math.max(5,10,1,-5,20))//20

//BT: Lấy ngẫu nhiên phần tử của mảng
var arg = ['A', 'B', 'C']

function getRandomItem(arg) {
    var random = [Math.floor(Math.random() * arg.length)]
    return arg[random]
}

getRandomItem(arg)
