console.log('-----Kiểu dữ liệu-----')
//BAI 21 - Kiểu dữ liệu
/**
 * 1. Du lieu nguyen thuy - Primitive Data
 * - Number
 * - String
 * - Boolean
 * - Undefined
 * - Null
 * - Symbol
 * 2. Du lieu phuc tap - Complex Date
 * - Function
 * - Object 
 */

//Kiểu dữ liệu Boolean
var age = 16
var canBuyAlcohol = age > 18;
console.log(canBuyAlcohol)
//
 var a =1;
 var fullName ='Thuy \' Ho';
 var isSuccess = true;
 var age;//undefined
 var isNull = null;//nothing
 var id = Symbol('id');//unique
 
 var myFunction = function(){//Function types
     alert('hi');
 }
 myFunction();
 
 var myObject ={//Object types
     name:'Thuy',
     age: 21,
     myFunction: function(){}
 }
 
 var myArray =['Java', 'C#','Javascript']
 console.log(myArray);
 
 //Kiem tra kieu du lieu
 console.log(typeof a);//number
 console.log(typeof fullName);//string
 console.log(typeof isNull);//object**
 console.log(typeof myFunction)//function;
 console.log(typeof myObject)//object
 console.log(typeof myArray)//object
 
 
 //Câu lệnh điều kiện If
 /**
  * 0
  * false
  * ''-""
  * undefined
  * NaN
  * null
  */
  var a ='0';//false, '', undefined,NaN, null -> else 
  //var a = 'Thuy'// -> if
  if(a){
      console.log('DIEU KIEN DUNG')
  }else{
      console.log('DIEU KIEN SAI')
  }