let a = parseInt(prompt("Nhap so a:"));
let b = parseInt(prompt("Nhap so b:"));
let calculation;
switch(calculation){
    case "cong":
        let tong = a +b;
        console.log(tong);
        break;
    case "tru":
        let hieu = a - b;
        console.log(hieu);
        break;
    case "nhan:":
        let tich = a *b;
        console.log(tich);
        break;
    case "chia":
        let thuong = a /b;
        console.log(thuong);
        break
    default:
        console.log("chon it thoi!!!!");
}