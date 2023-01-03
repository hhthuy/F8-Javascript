/**
 * Callback?: một hàm sẽ được thực hiện sau khi một hàm khác đã thực hiện xong
    1. Là hàm (function) (functions là objects-> nhận tham số là function, và trả về một function)
    2. Được truyền qua đối số 
    3. Được gọi lại (trong hàm nhận đối số)
    -> function truyền tham số và được gọi lai -> callback function.
Tại sao lại cần callbacks? 
    Javascript là một ngôn ngữ điều hành các sự việc-> mỗi lần thực thi thay vì chờ phản hồi-> thi no lai tiếp tục thực thi các lệnh tiếp theo, đồng thời chờ đợi phản hồi từ các sự việc khác.(không đợi function1 thực hiện xong mà sẽ thực hiện luôn function2.)
    -> Callback Để đảm bảo Js thực hiện đúng thứ tự ta định sẵn(callback function)
    -> Callback là cách đảm bảo code sẽ không hoạt động trước khi các code khác hoàn thành việc thực thi.
 */
console.log('-----Callback-----')
//khai báo hàm
//thêm callback vào như là một tham số của function(callback gọi function doHomework ())
function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`)
    callback();//console.log('Finished my homework')

  }
  
doHomework('math', function() {
    console.log('Finished my homework')
  });
//BT:
function sumCb(a, b) { console.log(a + b)}
function subCb(a, b) { console.log(a - b)}
function multiCb(a, b) { console.log(a * b)}
function divCb(a, b) { console.log(a /b) }

function caculate(a, b, callback) {
    return callback(a, b);
}
//callback -> caculate
caculate(1, 2, sumCb) //3
caculate(1, 2, subCb) //-1
caculate(1, 2, multiCb) //2
caculate(3, 1, divCb) //3

//PHAN 2

var course =['Javascript', 'PHP','Ruby'];

//callback: Là hàm map(), nhận đối số là fuction(), gọi lại trong hàm nhận đối số map() với tham số course
course.map(function(course){
    console.log(course)
})
// function myFunction(course){
//     console.log(course)
// }
// course.map();

console.log('Empty elements of array?')

//forEach, find, filter, some, every, reduce

//forEach
//1. Object protoptype
//2. For in
//3. hasOwnProperty
course.forEach(function(course, index, array){
  console.log(course, index, array)
})
// Javascript 0 (3) ['Javascript', 'PHP', 'Ruby']0: "Javascript"1: "PHP"2: "Ruby"length: 3[[Prototype]]: Array(0)
// callBack.js:58 PHP 1 (3) ['Javascript', 'PHP', 'Ruby']0: "Javascript"1: "PHP"2: "Ruby"length: 3[[Prototype]]: Array(0)
// callBack.js:58 Ruby 2 (3) ['Javascript', 'PHP', 'Ruby']

//dinh nghia phuong thuc forEach2 cho Array contructor
Array.prototype.forEach2 = function(callback){
  for (var index in this){
    console.log('index:' + index);
  }
}
course.forEach2(function(course, index, array){
  console.log(course, index, array)
})
// index:0
// callBack.js:71 index:1
// callBack.js:71 index:2
// callBack.js:71 index:forEach2

//find(): tra ve phan tu dau tien thoa man
//filter(): tra ve tat ca các phần tử thỏa mãn điều kiện, đưa vào mảng mới
Array.prototype.filter2 = function(callback){
  var output =[];
  for(var index in this){
    if(this.hasOwnProperty(index)){
      var result = callback(this[index], index, this);
      if(result){
        output.push(this[index]);
      }
    }
    
  }
}

var courses = [
  { name: 'Javascript', coin: 680},
  { name: 'PHP', coin: 860},
  { name: 'Ruby', coin: 980}
];
var filterCourses = courses.filter2(function(course, index, array){
  
  return course.coin > 700;
})
console.log(filterCourses);//(2) [{…}, {…}] PHP, Ruby
