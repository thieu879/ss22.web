let a = parseInt(prompt("Nhap so a:"));
let b = parseInt(prompt("Nhap so b:"));

if(a % b == 0){
    console.log(a/b);
}else if(b%a==0){
    console.log(b/a);
}else{
    console.log("cut ra ngoai!!!!");
}