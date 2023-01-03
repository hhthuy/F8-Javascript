console.log('-----Mảng (array)------')
/**
Mảng (array)

1. Tao mang
    - Cach tao
    - Su dung cach nao?Vi sao? --> C2
    - Kiem tra data type.
2. Truy xuat mang
    - Do dai mang
    - Lay phan tu theo index
*/
//C1: X
var languages1 = new Array(
    'Javascript', 
    'PHP',
    'Ruby',
    null,
    undefined,
    function(){

    },
    {},
    123
);
console.log(languages1);
//C1
var languages = [
    'Javascript', 
    'PHP',
    'Ruby',
    null,
    undefined,
    function(){

    },
    {},
    123

];
console.log(languages)
console.log(typeof languages)//object
console.log(Array.isArray(languages))//kiem tra phai kieu arr -> true/false

console.log(languages.length)//8
console.log(languages[2])//Ruby

console.log('-----Làm việc với mảng-----')
/*
Làm việc với mảng (Keyword: Javascript array method)
    1. To string 
    2. Join
    3. Pop : xoa ptu cuoi arr -> return ptu da xoa
    4. Push: them ptu vao cuoi arr -> return do dai da them
    5. Shift: xoa ptu dau tien arr -> return ptu da xoa
    6. Unshift: them ptu dau arr > return  do dai da them
    7. Splice: xoa/cat/chen ptu moi vao arr-> return ptu da xoa
    8. Concat: noi 2 arr
    9. Slicecat/lay elemnet trong arr
*/
var arrLang = ['ReactJS', 'Angular', 'Vue', 'Ember']
console.log(arrLang.toString())

console.log(arrLang.join(' - '))

console.log(arrLang.pop())//Ember (Xoa element cuoi mang -> tra ve ptu da xoa)
console.log(arrLang)//(3) ['ReactJS', 'Angular', 'Vue']

console.log(arrLang.push('Preact','Svelte'))//5 (Them ptu vao cuoi arr -> tra ve Do dai cua arr)
console.log(arrLang)//(5) ['ReactJS', 'Angular', 'Vue', 'Preact', 'Svelte']

console.log(arrLang.shift())//ReactJS (Xoa ptu dau mang -> tra ve ptu da xoa)
console.log(arrLang)//(4) ['Angular', 'Vue', 'Preact', 'Svelte']

console.log(arrLang.unshift('CSS','HTML'))//6 (them ptu dau arr > return  do dai da them)
console.log(arrLang)//(6) ['CSS', 'HTML', 'Angular', 'Vue', 'Preact', 'Svelte']

//Splice: Xoa elemnet bat ky trong arr ((vitribatdauxoa,soluongptuxoa,chenPtu)) -> return ptu da xoa
console.log(arrLang.splice(1,2))//(2) ['HTML', 'Angular']
console.log(arrLang.splice(1,2,'Dart'))//['Vue', 'Preact']
console.log(arrLang)//(3) ['CSS', 'Dart', 'Svelte']

//Concat: noi 2 arr
var lag1 = ['Java', 'C#']
var lag2 = ['Python','PHP', 'Javascript']
console.log(lag1.concat(lag2))//(4) ['Java', 'C#','Javascript', 'Python', 'PHP']
console.log(lag2.concat(lag1))//(4) ['Python', 'PHP','Javascript', 'Java', 'C#']

//Slice: cat/lay elemnet trong arr (vitribatdaucat, vitrikethuccat)
var arr = ['ReactJS', 'Angular', 'Vue', 'Ember','Nodejs']
console.log(arr.slice(0))//(5) ['ReactJS', 'Angular', 'Vue', 'Ember', 'Nodejs'](copy arr)
console.log(arr.slice(1,3))//(2) ['Angular', 'Vue']
console.log(arr.slice(-1))//['Nodejs'] (trả về phần tử cuoi cung)
console.log(arr.slice(0,1))//['ReactJS'] trả về phần tử đầu tiên