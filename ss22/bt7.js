let a = parseInt(prompt("Nhap so a:"));
let b = parseInt(prompt("Nhap so b:"));
let c = parseInt(prompt("Nhap so c:"));
let delta = b*b - 4*a*c;
if(b==0){
    console.log("PT vo nghiem");
}else if(a==0){
    let kq = -c/b;
    console.log(kq);
}else if(a==0 && b==0){
    console.log("PT vo nghiem");
}else if(c==0){
    let kq1 = (-b)/a;
    console.log("0");
    console.log(kq1);
}else if(a==0 && c==0 || b==0 && c==0){
    console.log("0");
}else if(delta < 0){
    console.log("PT vo nghiem");
} else if (delta == 0) {
    let x = -b / (2*a);
    console.log("Phương trình có nghiệm kép x1 = x2 = " + x);
} else {
    let x1 = (-b - Math.sqrt(delta)) / (2*a);
    let x2 = (-b + Math.sqrt(delta)) / (2*a);
    console.log("Phương trình có hai nghiệm phân biệt x1 = " + x1 + ", x2 = " + x2);
}