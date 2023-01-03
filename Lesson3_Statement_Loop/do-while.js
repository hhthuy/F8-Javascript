console.log('-----do/while----')

//do/while: kiem tra lan lap tu lan thu 2 tro di
//lan dau tien lap ko ktra dieu kien, cu xu ly trong do{} roi moi ktra dieu kien
var i =0;
do {
    i++;
    console.log(i);//1-10

}while(i<10)//vong lap chay 10 lan

//Break and Cotinute trong Loop


//Vong lap long nhau - nested Loop
console.log('Vong lap long nhau - nested Loop')
var myArray = [
    [1,2],
    [3,4],
    [4,5]
];

for (var i = 0; i < myArray.length; i++){// 
    for(var j = 0; j < myArray[i].length; j++){//[1,2] [2,3] [5,6]
        console.log(myArray[i][j])//1 2 3 4 5 
    }

}

//LOOP
for (var i = 20; i > 0; i ++){
    console.log(1);//100-1
}

for(var i =O; i  < 20; i += 5){
    console.log(i)//0 5 10 15 20
}