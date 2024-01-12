let month = parseInt(prompt("Nhap thang:"));
let year = parseInt(prompt("Nhap nam:"));
switch(month){
    case 1:case 3:case 5:case 7:case 8:case 10: case 12:
        console.log("31 ngay");
        break;
    case 2:
        if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            console.log("29 ngay");
        } else {
            console.log("28 ngay");
        }
        break;
    case 4: case 6:case 9:case 11:
        console.log("30 ngay");
        break;
    default:
        console.log("m dua t a!!");
}