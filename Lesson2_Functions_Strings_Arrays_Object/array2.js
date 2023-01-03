/*
Array method
    - forEach()
    - every()
    - some(): 
    - find(): tra ve 1 phan tu
    - fitter(): tra ve Nhieu phan tu
    - map()
    - reduce()
*/
console.log('Làm việc với mảng - Phần 2')
var courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 200//some(): flase -> tiep
    },
    {
        id: 2,
        name: 'Ruby',
        coin: 0 //some(): true -> dung
    },
    {
        id: 3,
        name: 'PHP',
        coin: 150
    },
    {
        id: 4,
        name: 'HTML , CSS',
        coin: 0
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 0
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 100
    },
    {
        id: 7,
        name: 'Ruby',
        coin: 0 
    },
];

// forEach()
// return: dừng lại một hàm và trả về giá trị từ hàm đó.
//  break: thoát khỏi câu lệnh switch / vòng lặp (for, while, do...while, for...in).
courses.forEach(function(course, index){
    console.log(index, course);
})


//every(): ktra tat cac cac ptu cua mang thoa man 1 dieu kien nao do (all true -> true)
//Kiem tra tat ca khoa hoc co phia mien phi hay ko? (Mien phi coin =0)
var isFree = courses.every(function(course, index){
   return  course.coin === 0;
})
console.log(isFree);//false

//some(): Ktra chi can 1 elemnt trong arr thoa -> thi tra ve ( 1 true -> true)
//Kiem tra chi can 1 free -> tra ve true
var isFree = courses.some(function(course, index){
    return  course.coin === 0;
 })
 console.log(isFree);//true 


 //Tim phan tu trong object co nam='Ruby'
 //find(): chi tra ve 1 phna tu(tim tren xuong thay DUNG -> Xuat ra luon)
 var oneCourse = courses.find(function(oneCourse, index){
    return  oneCourse.name === 'Ruby';
 })
 console.log(oneCourse);//id: 2, name: 'Ruby', coin: 0}

//filter()
//tra ve tat ca cac phan tu thao man
var listCourse = courses.filter(function(listCourse, index){
    return  listCourse.name === 'Ruby';
 })
 console.log(listCourse);//(3) [{…}, {…}, {…}]

/**Array map() method */
//map(): chinh sua thay doi 1 elment trong arr
function courseHandler(course, index){
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index:index
    };
}
var newCourse = courses.map(courseHandler);//map(): phai truyen vao function
console.log(newCourse)//(7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]

// Lay tat ca name cua  courses arr va dua vao new arr
function courseNameHandler(course, index){
    return course.name;
}
var newNameCourse = courses.map(courseNameHandler);//map(): phai truyen vao function
console.log(newNameCourse)//(7) ['JavaScript', 'Ruby', 'PHP', 'HTML , CSS', 'ReactJS', 'Ruby', 'Ruby']

/*Array reduce() method*/
//reduce()
//Tinh tong so coin
//c1
var totalCoin1 = 0;//Bien luu tru
for(var course of courses){//lap qua cac phan tu
    totalCoin1 += course.coin;//thuc hien luu tru
}
console.log(totalCoin1);//450

//c2
// var i=0;
// function coinHandler2(accumulator, currentValue, currentIndex, originArray){//accumulator: bien luu tru
//     i++;
//     var total = accumulator + currentValue.coin;

//     console.table({
//         'Luot chay: ': i,
//         'Bien tich tru: ': accumulator,
//         'Gia khoa hoc: ': currentValue.coin,
//         'Tich tru duoc: ': total
//     });
//     return total;
// }
// var totalCoin2 = courses.reduce(coinHandler2,0);//0: gia tri khoi tao ban dau cho bien luu tru accumulator
//c2
function coinHandler2(accumulator, currentValue){
    return accumulator + currentValue.coin;
}
var totalCoin2 = courses.reduce(coinHandler2,0);
console.log(totalCoin2);//450

//C2. Ngan hon
var totalCoin2 = courses.reduce(function(total, course){
    return total + course.coin;
},0);
console.log(totalCoin2);//450


console.log('---------Bai tap----------')
//BT: Hàm getMostFavoriteSport sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5.
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
function getMostFavoriteSport(sports) {
    var favoriteSport = sports.filter(function(sport) {
        return sport.like > 5
    })
    return favoriteSport;
}
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]
 
//BT: Tính tổng số like
function getTotalLike(sports) {
    var totalLike = sports.reduce(function (accumulator, currentValues) {
    return accumulator + currentValues.like;
    }, 0)
    return totalLike;
    }
    console.log(getTotalLike(sports)) // Output: 21