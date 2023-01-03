console.log('-----------Hàm (function)-----------')
//Bai 40 - Khái niệm hàm (function)
/**
 1. Ham ?
    - Moi khoi ma
    - Lam veic cu the
2. Loai ham
    - Built-in
    - Tu dinh nghia
3. Tinh chat
    - Khong thuc thi khi dinh nghia
    - Se thuc thi khi duoc goi
    - Co the nhan tham so
    - Co the tra ve 1 gia tri
 */
function writelog(message){
    console.log(typeof message)
}
writelog('Test, Test 1');
//Tham số trong hàm
/**
1. Tham so?
    - Dinh nghia
    - Kieu du lieu
    - Tinh private?
    - 1 tham so
    - Nhieu tham so
2. Truyen tham so
    - 1 tham so
    - Nhieu  tham so
3. Arguments
    - Doi tuong arguments
    - Gioi thieu vong for
 */
function writeLog1(){
    console.log(arguments);//>Arguments(2) ['Log 1', 'Log 2', callee: ƒ, Symbol(Symbol.iterator): ƒ]
    var myString =' ';
    for (var param of arguments){
        //console.log(param)
        myString += `${param} - `;
    }
    console.log(myString);
}
writeLog1('Log 1', 'Log 2', 'Log 3')


function cong(a,b){
    return a,b;
}
var result = cong(2,8);
console.log(result);

function showMessage(){
    function showMessage2(){
        console.log('Message 2')
    }
    showMessage2();
}
showMessage();
//Các loại hàm
/**
 * 1. Declaration function
 * 2. Expression fuction
 * 3. Arrow function
 */
//Declaration function
function declaration(){
    console.log('Declaration function')
}

//Expression fuction
var expression = function(){
    console.log('Expression fuction')
}

setTimeout(function(){
    console.log('Expression fuction')
})
setTimeout(function autoLogin(){//dat ten or ko
    console.log('Expression fuction')
})
var myObject = {
    myFunction: function(){
        console.log('Expression fuction')
    }
    
}
console.log('----------------------')

