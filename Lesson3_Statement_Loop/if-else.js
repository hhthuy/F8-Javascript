//Cau lenh re nhanh If-else
console.log('-----Lệnh rẽ nhánh If else-----')
//(chi can 1 dk dung -> thuc thi dong code trong nhanh do, va ko ktra nhanh con lai)
var date = 2;
if (date === 2){//Ktra tra date=2 
    console.log('hom nay la thu 2')//dung -> thuc thi code (ko ktra nhanh con lai)
}else if(date >  0){//ko ktra
    console.log('hom nay la thu 3')
}else if(date === 4){//ko ktra
    console.log('hom nay la thu 4')
}else{
    console.log('Khong biet')
}
//Toán tử 3 ngôi (Ternary operator)
var course = {
    name: 'Javscript',
    coin: 250
}
// if(course.coin > 0){
//     console.log(`${course.coin} Coins`)
// }else{
//     console.log('Mien phi');
// }

var result = course.coin > 0 ? `${course.coin} Coins` : 'Mien phi';
console.log(result)

//BT
function getCanVoteMessage(age) {
    return age >= 18 ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu';
}