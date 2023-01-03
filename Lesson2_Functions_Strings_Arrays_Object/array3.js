/*
sort() => sap xep trai - phai
reverse() => sap xep phai - trai
includes(value) => true/false
some(value, index, array) => true/false (1true => true)
every(value, index, array) => true/false (1false => false)
findIndex(value) => index
push(value) => index (add-end)
pop() => element (del-end)
shift() => elemnet (del-start)
at(index) => element
fill(value, end, start) => [element]
join() => elemnet (string)
find(value) => 1 element
filter(value) => n elemnet
concat() => [elemnet1 + element2] => 2 arr
splice(start,end) => [elementStart, elemnetEnd]
*/ 
var item = ['a','b','c','d']
var item1 = ['thuy','thuy1','thuy1','thuy2']
var item2 =[10,20,30,40]

console.log(item.concat(item1))//(8) ['a', 'b', 'c', 'd', 'thuy', 'thuy1', 'thuy1', 'thuy2']
console.log(item.splice(1,2))//(2) ['b', 'c'] => Noi
console.log(item.splice(1,2,'c1'))//['d'] => Chen
console.log(item)//(2) ['a', 'c1']

console.log(item.at(1))//b
console.log(item1.every(test  => test === 'thuy'))//false (1 false => false)alltrue
console.log(item1.some(test  => test ==='thuy'))//true (1true => true)

console.log(item2.findIndex(item  => item === 10))//0
console.log(item2.find(test  => test > 10))//20 
console.log(item2.filter(test  => test > 10))//(3) [20, 30, 40]

console.log(item2.map(test => test * 2))//(4) [20, 40, 60, 80]
console.log(item2.reduce((total,currentValue) => {
    return total + currentValue;
  }))//100

console.log(item.sort())//(4) ['a', 'b', 'c', 'd']
console.log(item.reverse())//(4) ['d', 'c', 'b', 'a']
console.log(item.includes('b'))//true


console.log(item.push('e'))//5
console.log(item.pop())//e
console.log(item.shift())//a


console.log(item.fill('t'))//(3) ['t', 't', 't']
console.log(item.join(' '))//t t t (string)