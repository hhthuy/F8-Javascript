/**
Vong lap - Loop
    1. for - Lap voi dieu kien dung
    2. for/in - Lap qua key cua doi tuong
    3. for /of - Lap qua value cua doi tuong
    4. while - lap khi dieu kien dung
    5  do/while- lap it nhat 1 lan, sau do lap khi dieu kien dung
 */
console.log('-----Vòng lặp For-----')
//For loop
for(var i = 1; i <= 10; i++){
    console.log(i);
}

//
var i =1;
for (; i<=10;){
    console.log(i);//1-10
    i++;
}
var i =1;
for (; i<=10;){
    i++;//2-10
    console.log(i);
}
/*
B1: Tao bien i va gan i=1 (chay 1 lan)
B2: i <= 1000 (DK DUNG) -> Thuc thi code i = 1
B3: i++ (i =2) -> quay lai ktra dkien i <= 1000 ->thuc thi
B4: i++ ....-> ktra dk -> thuc thi
*/

//BT: Tạo danh sách số ngẫu nhiên
function getRandNumbers(min, max, length){
    let arr=[];
    for(let i=0; i<length;i++){
        arr[i] = Math.random() * (max - min) + min  ; 
    }
    return arr;
}

//BT: Tính tổng các phần tử là số của mảng
// getTotal([1, 2, 3]) // Output: 6
function getTotal(arr) {
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}

// Lay phan tu trong 1 mang
var myArray = [
    'Javascript',
    'PHP',
    'Java',
    'Dart'
];
 console.log(myArray[2]);//Java

 console.log('Lay phan tu trong 1 mang: ')
 for(var i = 0; i < myArray.length; i++){
    console.log(myArray[i])
 }
//BT: Tính tổng giá trị đơn hàng
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
function getTotal(orders) {
    
    let totalprice = 0;
    for(var i = 0; i < orders.length; i++) {
        totalprice += orders[i].price;
    }
    return totalprice;
}

console.log(getTotal(orders))

console.log('-----Vòng lặp For/in (lay key cuar Object/Arr/String)-----')
//For/in: lay key cua doi tuong
//Object
var myObject ={
    name: 'Thuy',
    age: 18,
    address:'Duong Quang Ham, Go Vap, TPHCM'
}

for(var key in myObject){//Object co bao nhieu key chay bao nhieu lan, moi lan chay gan gia tri key duoi dang chuoi
    console.log(key);//key : name, age , address
    //console.log(myInfo[key]);//value
}


//ARR
var myArray = ['Javascript', 'PHP','Java','C#']; //key cuar arr la so
for (var key in myArray){
    console.log(key)//key: 0 1 2 3 
   // console.log(language[key]);//value
}

//CHUOOI
var myString ='Hong Thuy';
console.log(myString[3])//value: g
for(var value in myString){
    console.log(value)// 0 1 2 3 4 5 6 7 8
}

//BT
function run(object) {
    var arr = [];
for (var key in object){
arr.push("Thuộc tính " + key + " có giá trị " + object[key]);
}
return arr;

}
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

console.log('-----Vòng lặp For/of (lay value) -----')
// For/of: lay ptu cua mang/ tung chu cai cua chuoi
//ARR
var myArray = ['Javascript', 'PHP','Java','C#']; //key cuar arr la so
for (var value of myArray){
    console.log(value)//Javascript PHP Java C#
}
//String
var myString ='Hong Thuy';
for(var value of myString){
    console.log(value)//H o n g T h u y
}
//Object (ko sd duoc for/of -> phai bien doi)
var myObject1 ={
    name: 'Thuy',
    age: 18,
    address:'Duong Quang Ham, Go Vap, TPHCM'
};
//C1
for (var value of Object.keys(myObject1)){
    console.log(myObject1[value])//Thuy 18 Duong Quang Ham, Go Vap, TPHCM
}
//C2
for (var value of Object.values(myObject1)){
    console.log(value)//Thuy 18 Duong Quang Ham, Go Vap, TPHCM
}