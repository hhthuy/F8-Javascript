//Cau lenh re nhanh - Switch
console.log('-----Lệnh rẽ nhánh Switch-----')

var date = 2;
switch(date){//lay date di so sanh gia tri tung case
    case 2: //date = 2 -> dung (ko break)-> chuyen case 3 
    case 3: //date = 3 -> sai (ko break)- > chuyen case 4
    case 4: //4===4
        console.log('Hom nay la thu 2,3,4');
        break;//thoat khoi switch
    case 5: 
        console.log('Hom nay la thu 5');
        break;
    case 6: 
        console.log('Hom nay la thu 6');
        break;//break cuoi van chay xuong default
    default:
        console.log('Khong biet');
}

/*
Khi nao su dung lenh re nhanh if..else hoac switch..case?
Su dung if..else (=< 3 case): So sanh tinh dung sai co toan tu (>,<, =,...) vd: if(a >b){}
Su dung switch..case(>3 case): Khi biet truoc gia tri trong khoang. vd: date nam trong khoang 2 den 7
*/


//BT
function run(fruits) {
    var result;

    switch(fruits) {
        case "Banana":
            result = "This is a Banana";
            break;
        case "Apple":
            result = "This is an Apple";
            break;
        default:
            result = "No fruits";
    }

    return result;
}

